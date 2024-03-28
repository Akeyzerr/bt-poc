import React, { useEffect, useState } from 'react';

import { BluetoothDevice } from './Bluetooth.def.types';
import styles from "./deviceProperties.module.scss";

interface DeviceProps {
  device: BluetoothDevice | null;
}

const BtDeviceProperties: React.FC<DeviceProps> = ({ device }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    if (device) {
      setIsVisible(true);

      const handleDisconnect = () => {
        setIsVisible(false);
      };

      device.addEventListener('gattserverdisconnected', handleDisconnect);

      return () => {
        device.removeEventListener('gattserverdisconnected', handleDisconnect);
      };
    }
  }, [device]);

  if (!isVisible || !device) return null;

  return (
    <div className={styles.deviceCard}>
      <h3>Device Information</h3>
      <p><strong>Name:</strong> {device.name}</p>
      <p><strong>ID:</strong> {device.id}</p>
    </div>
  );
};

export default DeviceProperties;
