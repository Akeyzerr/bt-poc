import { useState } from "react";

import { StatusMessageProps } from "../../../shared/statusMsg";
// import * as protobuf from '../../../shared/compiled'

const useBluetoothConnection = () => {
  const [btDevice, setBtDevice] = useState<BluetoothDevice | null>(null);
  const [isBtAvailable, setIsBtAvailable] = useState<boolean | null>(null);
  const [BtStatusMessage, setStatusMessage] = useState<StatusMessageProps | null>(null);
  const [protobufMsg, setProtobufMsg] = useState<string>('');

  const dismissBtStatusMessage = () => { setStatusMessage(null); };

  const checkBluetoothAvailability = () => {
    const available = 'bluetooth' in navigator && (navigator as any).bluetooth !== undefined;

    setIsBtAvailable(available);

    const okMsg: StatusMessageProps = {
      message: 'Bluetooth is available',
      msgType: 'success',
      autoDismiss: true,
      timeout: 3000,
    };
    const errMsg: StatusMessageProps = {
      message: 'Bluetooth API is not available.\nPlease, use supported browser.',
      msgType: 'error',
      autoDismiss: false,
    };
    setStatusMessage(available ? okMsg : errMsg);
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
      setStatusMessage({
        message: 'Device connected',
        msgType: 'success',
        autoDismiss: true,
        timeout: 3000,
      });
      if (!device.gatt) {
        setStatusMessage({
          message: 'Error: GATT not available',
          msgType: 'error',
          autoDismiss: false,
        });

        return null
      };

      const server = await device.gatt.connect();
      setStatusMessage({
        message: 'GATT connected',
        msgType: 'success',
        autoDismiss: true,
        timeout: 1000,
      });
      device.addEventListener('gattserverdisconnected', onDeviceDisconnected)
      setBtDevice(device);

      const service = await server.getPrimaryService('49535343-fe7d-4ae5-8fa9-9fafd205e455');
      const characteristic = await service.getCharacteristic('49535343-1e4d-4bd9-ba61-23c647249616');
      await characteristic.startNotifications();
      characteristic.addEventListener('characteristicvaluechanged', (event: any) => {
        const value = event.target.value;
        const stringifiedMsg = new TextDecoder().decode(value);
        setProtobufMsg(stringifiedMsg);
      });

      return device;
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage({
        message: 'Error: ' + error,
        msgType: 'error',
        autoDismiss: false,
      });

      return null;
    }
  };

  const disconnectDevice = async () => {
    if (!btDevice) return;
    try {
      await btDevice.gatt.disconnect();
      setStatusMessage({
        message: 'GATT successfully disconnected',
        msgType: 'success',
        autoDismiss: true,
        timeout: 1000,
      });
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage({
        message: 'Error: ' + error,
        msgType: 'error',
        autoDismiss: false,
      });
    }
  }

  const onDeviceDisconnected = () => {
    setBtDevice(null);

    setStatusMessage({
      message: 'Device disconnected',
      msgType: 'warning',
      autoDismiss: false,
    });
  };

  return { btDevice, isBtAvailable, BtStatusMessage, checkBluetoothAvailability, connectToBtDevice, disconnectDevice, dismissBtStatusMessage, protobufMsg};
};

export default useBluetoothConnection;
