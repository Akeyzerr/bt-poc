import React, { useEffect, useState } from 'react';

import { BluetoothDevice } from '../../shared/Bluetooth.def.types';

interface DeviceProps {
  device: BluetoothDevice | null;
}

const DeviceProperties: React.FC<DeviceProps> = ({ device }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const temp = () => console.log('Device in the new comp:', device);
  useEffect(() => {
    if (device) {
      console.log('Device in the new comp:', device);
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
    <div>
      <h2>Device Information</h2>
      <p><strong>Name:</strong> {device.name}</p>
      <p><strong>ID:</strong> {device.id}</p>
      {/* Display more properties as needed */}
    </div>
  );
};

export default DeviceProperties;
