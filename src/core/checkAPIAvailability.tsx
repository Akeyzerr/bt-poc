import React from 'react';
import StatusMessage from '../shared/statusMsg';
import { useBluetooth } from './Bluetooth/BluetoothContext';

const CheckAPIAvailability: React.FC = () => {
  const { isBtAvailable, checkBluetoothAvailability, connectToDevice, statusMessage, dismissStatusMessage, btDevice, disconnectDevice } = useBluetooth();

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
    <div className='card'>
      <button onClick={checkBluetoothAvailability} className={getButtonClass()}>
        <span className="material-icons">{getIconName()}</span>
        {isBtAvailable == null && <i style={{
          fontFamily: 'Roboto',
          paddingInlineStart: '0.5em',
        }}>Check Bluetooth API availability</i>}
      </button>

      {isBtAvailable !== null &&
        <>
          <button onClick={connectToDevice} className={`icon ${btDevice ? 'connected' : ''}`} >
            <span className={`material-icons ${btDevice ? 'heartbeat' : ''}`}>bluetooth</span>
          </button>
          {btDevice &&
            <button onClick={disconnectDevice} className='icon' aria-label='disconnect'>
              <span className='material-icons'>close</span>
            </button>
          }
        </>
      }

      {statusMessage && <StatusMessage
        {...statusMessage}
        onDismiss={dismissStatusMessage}
      />}
    </div>
  );
};

export default CheckAPIAvailability;
