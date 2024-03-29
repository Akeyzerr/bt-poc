import { useState } from "react";
import { StatusMessageProps, useStatusMessage } from "../../../shared/statusMessagesContext";
import * as protobuf from "../../../shared/protobuf/atccm-protobuf-ts"


function findAndExtractMinPayload(data: Uint8Array): Uint8Array | null {
  const startMarker = [0xaa, 0xaa, 0xaa];
  const endMarker = 0x55;
  let startIndex = -1;

  for (let i = 0; i <= data.length - startMarker.length; i++) {
    if (data[i] === startMarker[0] && data[i + 1] === startMarker[1] && data[i + 2] === startMarker[2]) {
      startIndex = i + startMarker.length;
      break;
    }
  }

  if (startIndex === -1) return null;

  // Assuming no byte stuffing for simplicity. Real implementation needs to handle this.
  const endIndex = data.indexOf(endMarker, startIndex);

  if (endIndex === -1) return null;

  const payload = data.slice(startIndex, endIndex);

  return payload;
}


const useBluetoothConnection = () => {
  const [btDevice, setBtDevice] = useState<BluetoothDevice | null>(null);
  const [isBtAvailable, setIsBtAvailable] = useState<boolean | null>(null);
  const [protobufMsg, setProtobufMsg] = useState<string>('');
  const { addMessage } = useStatusMessage();

  const checkBluetoothAvailability = () => {
    const available = 'bluetooth' in navigator && (navigator as any).bluetooth !== undefined;

    setIsBtAvailable(available);

    const okMsg: StatusMessageProps = { message: 'Bluetooth is available', msgType: 'success', timeout: 2000, };
    const errMsg: StatusMessageProps = { message: 'Bluetooth API is not available.\nPlease, use supported browser.', msgType: 'error', }; addMessage(available ? okMsg : errMsg);
  }

  // const anyDeviceFilter = () => {
  //   // Return a filter that accepts any device before ATCCM devices are the only ones that are supported
  //   // This is a workaround for the lack of support for the 'filters' option in Chrome
  //   return Array.from('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  //     .map(c => ({ namePrefix: c }))
  //     .concat({ name: '' });
  // }

  const connectToBtDevice = async () => {
    if (!isBtAvailable) return null;
    try {
      const device: BluetoothDevice = await (navigator as any).bluetooth.requestDevice({
        acceptAllDevices: true,
        // filters: anyDeviceFilter(),
        optionalServices: ['49535343-fe7d-4ae5-8fa9-9fafd205e455', '49535343-1e4d-4bd9-ba61-23c647249616']
      });
      addMessage({ message: 'Device connected', msgType: 'success', timeout: 3000, });
      if (!device.gatt) {
        addMessage({ message: 'Error: GATT not available', msgType: 'error', autoDismiss: false, });

        return null
      };

      const server = await device.gatt.connect();
      addMessage({
        message: 'GATT connected',
        msgType: 'success',
        timeout: 1000,
      });
      device.addEventListener('gattserverdisconnected', onDeviceDisconnected)
      setBtDevice(device);

      const service = await server.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
      const characteristic = await service.getCharacteristic('49535343-1e4d-4bd9-ba61-23c647249616');
      await characteristic.startNotifications();
      characteristic.addEventListener('characteristicvaluechanged', (event: any) => {
        const value = event.target.value;
        const protobufMsg = findAndExtractMinPayload(value.buffer) || new Uint8Array();
        const decodedMsg = protobuf.Values.fromBinary(protobufMsg);
        console.log('Decoded message:', decodedMsg);
        setProtobufMsg(JSON.stringify(decodedMsg));
      });

      return device;
    } catch (error) {
      console.error('Error:', error);
      addMessage({ message: 'Error: ' + error, msgType: 'error', });

      return null;
    }
  };

  const disconnectDevice = async () => {
    if (!btDevice) return;
    try {
      btDevice?.gatt?.disconnect();
      addMessage({ message: 'GATT successfully disconnected', msgType: 'success', autoDismiss: true, timeout: 1000, });
    } catch (error) {
      console.error('Error:', error);
      addMessage({ message: 'Error: ' + error, msgType: 'error', autoDismiss: false, });
    }
  }

  const sendBlinkCommand = async () => {
    if (!btDevice || !btDevice.gatt?.connected) return;

    const cmd = protobuf.Command.BLINK;
    const packet: protobuf.AtccmPacket = protobuf.AtccmPacket.create({
      protocolVersion: 2,
      command: cmd,
      write: true,
      values: {
        terminationEnabled: true,
        chargerOn: false,
        blinks: 3,
        thrusterPosition: 0,
        retractionEnabled: false,
        jetModeEnabled: false
      } as protobuf.Values
    });
    const buffer = protobuf.AtccmPacket.toBinary(packet);
    const minProtocolBuffer = new Uint8Array([0xaa, 0xaa, 0xaa, ...buffer, 0x55]);
    console.log('Sending:', minProtocolBuffer);
    try {
      const service = await btDevice.gatt.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
      const characteristic = await service.getCharacteristic('49535343-8841-43f4-a8d4-ecbe34729bb3');
      await characteristic.writeValue(minProtocolBuffer.buffer);
    } catch (error) {
      console.error('Error:', error);
      addMessage({ message: 'Error: ' + error, msgType: 'error', });
    }

    addMessage({ message: 'Blink command sent', msgType: 'info', autoDismiss: true, timeout: 3000, });
  }

  const onDeviceDisconnected = () => {
    setBtDevice(null);

    addMessage({ message: 'Device disconnected', msgType: 'warning', autoDismiss: false, });
  };

  return { btDevice, isBtAvailable, checkBluetoothAvailability, connectToBtDevice, disconnectDevice, protobufMsg, sendBlinkCommand };
};

export default useBluetoothConnection;
