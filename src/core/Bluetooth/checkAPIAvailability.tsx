import React from 'react';
import BluetoothStatus from './btStatusMsg';
import StatusMessage from '../../shared/statusMsg';
import useBluetoothConnection from './useBtConnection';

const CheckAPIAvailability: React.FC = () => {
const { isAvailable, checkBluetoothAvailability, connectToDevice, statusMessage } = useBluetoothConnection();

  const getButtonClass = () => {
    if (isAvailable === null) {
      return "icon";
    } else {
      return isAvailable ? "icon green" : "icon red";
    }
  }

  const getIconName = () => {
    if (isAvailable === null) {
      return "help_outline";
    } else {
      return isAvailable ? "check" : "close";
    }
  }

  return (
    <>
      <button onClick={checkBluetoothAvailability} className={getButtonClass()}>
        <span className="material-icons">{getIconName()}</span>
      </button>

      {isAvailable !== null &&
        <button onClick={connectToDevice} className="icon">
          <span className="material-icons">bluetooth</span>
        </button>
      }

      {isAvailable !== null && <BluetoothStatus isAvailable={isAvailable} />}
      {statusMessage && <StatusMessage {...statusMessage} />}
    </>
  );
};

export default CheckAPIAvailability;
