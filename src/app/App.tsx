import './App.css'
import CheckAPIAvailability from '../core/checkAPIAvailability'
import BtDeviceProperties from '../core/Bluetooth/btDeviceProperties'
import { useBluetooth } from '../core/Bluetooth/BluetoothContext';
import { useUSB } from '../core/USB/USBContext';

function App() {
  const { btDevice, protobufMsg } = useBluetooth();
  const { usbDevice } = useUSB();

  return (
    <>
      <div className="containerHeader">
        <h1>ATCCM PWA POC</h1>
      </div>
      <div className="containerToolbar">
        <CheckAPIAvailability />
      </div>
      <div className="containerMain">
        {btDevice && <>
          <BtDeviceProperties device={btDevice} />
          <div className="card">
            <h2>Protobuf Message</h2>
            <div style={{ border: '1px solid black', padding: '10px', whiteSpace: 'pre-wrap', overflow: 'hidden' }}>
              {(protobufMsg && protobufMsg.length > 0) ? protobufMsg : 'No message received'}
            </div>
          </div>
        </>
        }
        {usbDevice && <>
          <span>USB Device Connected</span>
        </>}
      </div>
    </>
  );
}

export default App
