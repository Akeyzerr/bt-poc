import React from 'react';
import styles from './BluetoothStatus.module.scss'

interface Props {
  isAvailable: boolean;
}

const BluetoothStatus: React.FC<Props> = ({ isAvailable }) => {
  return (
    <div className={`${styles.statusBox} ${isAvailable ? styles.available : styles.notAvailable}`}>
      {isAvailable ? "Bluetooth API is available" : "Bluetooth API is not available"}
    </div>
  );
};

export default BluetoothStatus;
