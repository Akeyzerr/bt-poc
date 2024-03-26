import React, { createContext, useContext, Context } from "react";
import useBluetoothConnection from "../../hooks/useBtConnection";
import { BluetoothDevice } from "../../shared/Bluetooth.def.types";
import { StatusMessageProps } from "../../shared/statusMsg";

interface BluetoothContextProps {
  btDevice: BluetoothDevice | null;
  isBtAvailable: boolean | null;
  statusMessage: StatusMessageProps | null;
  checkBluetoothAvailability: () => void;
  connectToDevice: () => Promise<void>;
  dismissStatusMessage: () => void;
}

const BluetoothContext: Context<BluetoothContextProps | null> = createContext<BluetoothContextProps | null>(null);
export const useBluetooth = () => {
  const ctx = useContext(BluetoothContext);
  if (!ctx) {
    throw new Error('useBluetooth must be used within a BluetoothProvider');
  }
  return ctx;
}

export const BluetoothProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    btDevice,
    isBtAvailable,
    statusMessage,
    checkBluetoothAvailability,
    connectToDevice,
    dismissStatusMessage,
  } = useBluetoothConnection();

  return (
    <BluetoothContext.Provider value={{
      btDevice,
      isBtAvailable,
      statusMessage,
      checkBluetoothAvailability,
      connectToDevice,
      dismissStatusMessage,
    }}>
      {children}
    </BluetoothContext.Provider>
  );
}