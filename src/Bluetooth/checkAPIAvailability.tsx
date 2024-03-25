import React from 'react';
import BluetoothStatus from './BT-API-Status';

const CheckAPIAvailability: React.FC = () => {
  const [isAvailable, setIsAvailable] = React.useState<boolean | null>(null);

  const checkBluetoothAvailability = () => {
    setIsAvailable(!(navigator as any).bluetooth);
  };

  return (
    <div>
      <h2>Check Web Bluetooth API Availability</h2>
      <button onClick={checkBluetoothAvailability}>Check Availability</button>
      {isAvailable !== null && <BluetoothStatus isAvailable={isAvailable} />}
    </div>
  );
};

export default CheckAPIAvailability;
