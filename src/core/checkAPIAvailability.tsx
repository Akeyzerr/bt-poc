import React from 'react';
import StatusMessage from '../shared/statusMsg';
import { useBluetooth } from './Bluetooth/BluetoothContext';
import { useUSB } from './USB/USBContext';


const CheckAPIAvailability: React.FC = () => {
  const { isBtAvailable, checkBluetoothAvailability, connectToBtDevice, BtStatusMessage, dismissBtStatusMessage, btDevice, disconnectDevice } = useBluetooth();
  const { isUSBAvailable, checkUSBAvailability, connectToUSBDevice, USBStatusMessage, dissmissUSBStatusMessage } = useUSB();

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
      {isBtAvailable === null &&
        <button onClick={checkBluetoothAvailability} className={getButtonClass()}>
          <span className="material-icons">{getIconName()}</span>
          {isBtAvailable == null && <i style={{
            fontFamily: 'Roboto',
            paddingInlineStart: '0.5em',
          }}>Check Bluetooth API availability</i>}
        </button>
      }

      {isUSBAvailable === null &&
        <button onClick={checkUSBAvailability} className='icon'>
          <span className='material-icons'>{isUSBAvailable ? 'check' : 'close'}</span>
          {isUSBAvailable === null && <i style={{
            fontFamily: 'Roboto',
            paddingInlineStart: '0.5em',
          }}>Check USB API availability</i>}
        </button>}

      {isBtAvailable !== null &&
        <>
          <button onClick={connectToBtDevice} className={`icon ${btDevice ? 'connected' : ''}`} >
            <span className={`material-icons ${btDevice ? 'heartbeat' : ''}`}>bluetooth</span>
          </button>
          {btDevice &&
            <button onClick={disconnectDevice} className='icon' aria-label='disconnect'>
              <span className='material-icons'>close</span>
            </button>
          }
        </>
      }

      {isUSBAvailable !== null &&
        <>
          <button onClick={connectToUSBDevice} className='icon' aria-label='connect'>
            <span className='material-icons'>usb</span>
          </button>
        </>
      }

      {BtStatusMessage && <StatusMessage
        {...BtStatusMessage}
        onDismiss={dismissBtStatusMessage}
      />}

      {USBStatusMessage && <StatusMessage
        {...USBStatusMessage}
        onDismiss={dissmissUSBStatusMessage}
      />}

    </div>
  );
};

export default CheckAPIAvailability;
