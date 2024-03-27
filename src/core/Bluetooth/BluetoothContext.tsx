import React, { createContext, useContext, Context } from "react";
import useBluetoothConnection from "./hooks/useBtConnection";
import { StatusMessageProps } from "../../shared/statusMsg";

interface BluetoothContextProps {
  btDevice: BluetoothDevice | null;
  isBtAvailable: boolean | null;
  BtStatusMessage: StatusMessageProps | null;
  protobufMsg: string;
  checkBluetoothAvailability: () => void;
  connectToBtDevice: () => Promise<void>;
  disconnectDevice: () => void;
  dismissBtStatusMessage: () => void;
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
    BtStatusMessage,
    protobufMsg,
    checkBluetoothAvailability,
    connectToBtDevice,
    disconnectDevice,
    dismissBtStatusMessage,
  } = useBluetoothConnection();

  return (
    <BluetoothContext.Provider value={{
      btDevice,
      isBtAvailable,
      BtStatusMessage,
      protobufMsg,
      checkBluetoothAvailability,
      connectToBtDevice,
      disconnectDevice,
      dismissBtStatusMessage,
    }}>
      {children}
    </BluetoothContext.Provider>
  );
}