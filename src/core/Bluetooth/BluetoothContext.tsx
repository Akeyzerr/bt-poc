import React, { createContext, useContext, Context } from "react";
import useBluetoothConnection from "./hooks/useBtConnection";
import { BluetoothDevice } from "./Bluetooth.def.types";
import { StatusMessageProps } from "../../shared/statusMsg";

interface BluetoothContextProps {
  btDevice: BluetoothDevice | null;
  isBtAvailable: boolean | null;
  statusMessage: StatusMessageProps | null;
  protobufMsg: string;
  checkBluetoothAvailability: () => void;
  connectToDevice: () => Promise<void>;
  disconnectDevice: () => void;
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
    protobufMsg,
    checkBluetoothAvailability,
    connectToDevice,
    disconnectDevice,
    dismissStatusMessage,
  } = useBluetoothConnection();

  return (
    <BluetoothContext.Provider value={{
      btDevice,
      isBtAvailable,
      statusMessage,
      protobufMsg,
      checkBluetoothAvailability,
      connectToDevice,
      disconnectDevice,
      dismissStatusMessage,
    }}>
      {children}
    </BluetoothContext.Provider>
  );
}