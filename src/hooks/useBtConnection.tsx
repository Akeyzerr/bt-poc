import { useState } from "react";

import { StatusMessageProps } from "../shared/statusMsg";
import { BluetoothDevice } from "../shared/Bluetooth.def.types";

const useBluetoothConnection = () => {
  const [btDevice, setBtDevice] = useState<BluetoothDevice | null>(null);
  const [isBtAvailable, setIsBtAvailable] = useState<boolean | null>(null);
  const [statusMessage, setStatusMessage] = useState<StatusMessageProps | null>(null);

  const dismissStatusMessage = () => { setStatusMessage(null); };

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

  const anyDeviceFilter = () => {
    // Return a filter that accepts any device
    // This is a workaround for the lack of support for the 'filters' option in Chrome
    return Array.from('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .map(c => ({ namePrefix: c }))
      .concat({ name: '' });
  }

  const connectToDevice = async () => {
    if (!isBtAvailable) return null;
    try {
      const device = await (navigator as any).bluetooth.requestDevice({
        filters: anyDeviceFilter(),
        optionalServices: ['generic_access']
      });
      console.log('Device:', device);
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

      await device.gatt.connect();
      setStatusMessage({
        message: 'GATT connected',
        msgType: 'success',
        autoDismiss: true,
        timeout: 1000,
      });
      device.addEventListener('gattserverdisconnected', onDeviceDisconnected)
      setBtDevice(device);

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

  const onDeviceDisconnected = () => {
    setBtDevice(null);

    setStatusMessage({
      message: 'Device disconnected',
      msgType: 'warning',
      autoDismiss: false,
    });
  };

  return { btDevice, isBtAvailable, statusMessage, checkBluetoothAvailability, connectToDevice, dismissStatusMessage };
};

export default useBluetoothConnection;
