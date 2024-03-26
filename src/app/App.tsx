import './App.css'
import CheckAPIAvailability from '../core/Bluetooth/checkAPIAvailability'

function App() {
  return (
    <>
      <h1>ATCCM PWA POC</h1>
      <div className="card">
        <CheckAPIAvailability />
      </div>
    </>
  )
}

export default App
