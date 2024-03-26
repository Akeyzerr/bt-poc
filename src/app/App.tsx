import './App.css'
import CheckAPIAvailability from '../core/checkAPIAvailability'
import DeviceProperties from '../core/Bluetooth/deviceProperties'
import { useBluetooth } from '../core/Bluetooth/BluetoothContext';

function App() {
  const { btDevice } = useBluetooth();

  return (
    <>
      <h1>ATCCM PWA POC</h1>
      <div className="card">
        <CheckAPIAvailability />
      </div>
      {btDevice && <DeviceProperties device={btDevice} />}
    </>
  )
}

export default App
