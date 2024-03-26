import React from 'react';
import StatusMessage from '../shared/statusMsg';
import { useBluetooth } from './Bluetooth/BluetoothContext';

const CheckAPIAvailability: React.FC = () => {
  const { isBtAvailable, checkBluetoothAvailability, connectToDevice, statusMessage, dismissStatusMessage } = useBluetooth();

  const getButtonClass = () => {
    if (isBtAvailable === null) {
      return "icon";
    } else {
      return isBtAvailable ? "icon green" : "icon red";
    }
  }

  const getIconName = () => {
    if (isBtAvailable === null) {
      return "help_outline";
    } else {
      return isBtAvailable ? "check" : "close";
    }
  }

  return (
    <>
      <button onClick={checkBluetoothAvailability} className={getButtonClass()}>
        <span className="material-icons">{getIconName()}</span>
        {isBtAvailable == null && <i style={{
          fontFamily: 'Roboto',
          paddingInlineStart: '0.5em',
        }}>Check Bluetooth API availability</i>}
      </button>

      {isBtAvailable !== null &&
        <button onClick={connectToDevice} className="icon">
          <span className="material-icons">bluetooth</span>
        </button>
      }

      {statusMessage && <StatusMessage
        {...statusMessage}
        onDismiss={dismissStatusMessage}
      />}
    </>
  );
};

export default CheckAPIAvailability;
