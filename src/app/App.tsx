import './App.css'
import CheckAPIAvailability from '../core/checkAPIAvailability'
import DeviceProperties from '../core/Bluetooth/deviceProperties'
import { useBluetooth } from '../core/Bluetooth/BluetoothContext';

function App() {
  const { btDevice, protobufMsg } = useBluetooth();

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
          <DeviceProperties device={btDevice} />
          <div className="card">
            <h2>Protobuf Message</h2>
            <div style={{ border: '1px solid black', padding: '10px', whiteSpace: 'pre-wrap', overflow: 'hidden' }}>
              {(protobufMsg && protobufMsg.length > 0) ? protobufMsg : 'No message received'}
            </div>
          </div>
        </>
        }
      </div>
    </>
  )
}

export default App
