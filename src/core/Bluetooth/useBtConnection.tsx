import { useState } from "react";

import StatusMessageProps from "../../shared/statusMsg";

const useBluetoothConnection = () => {
  const [deviceInfo, setDeviceInfo] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [statusMessage, setStatusMessage] = useState<StatusMessageProps | null>(null);

  const checkBluetoothAvailability = () => {
    const available = 'bluetooth' in navigator && (navigator as any).bluetooth !== undefined;
    setIsAvailable(available);

    const okMsg: StatusMessageProps = {
      message: 'Bluetooth is available',
      msgType: 'success',
      autoDismiss: true,
      timeout: 3000,
    };
    const errMsg: StatusMessageProps = {
      message: 'Bluetooth API is not available in this browser',
      msgType: 'error',
      autoDismiss: false,
      timeout: 3000,
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
    if (!isAvailable) return;
    try {
      const device = await (navigator as any).bluetooth.requestDevice({
        filters: anyDeviceFilter(),
        optionalServices: ['generic_access']
      });
      console.log('Device:', device);
      device.addEventListener('gattserverdisconnected', onDeviceDisconnected)

      await device.gatt.connect();

      setDeviceInfo(`Connected to ${device.name}:${device.id} !`);
    } catch (error) {
      console.error('Error:', error);
      setDeviceInfo('Error: ' + error);
      setStatusMessage({
        message: 'Error: ' + error,
        msgType: 'error',
        autoDismiss: false,
      });
    }
  };

  const onDeviceDisconnected = () => {
    setDeviceInfo(null);
    setStatusMessage('Device disconnected');
  };

  return { deviceInfo, isAvailable, statusMessage, checkBluetoothAvailability, connectToDevice };
};

export default useBluetoothConnection;
