import React, { createContext, useContext, Context } from "react";
import useBluetoothConnection from "./hooks/useBtConnection";

export type BluetoothContextProps = {
  btDevice: BluetoothDevice | null;
  isBtAvailable: boolean | null;
  protobufMsg: string;
  checkBluetoothAvailability: () => void;
  connectToBtDevice: () => Promise<void>;
  disconnectDevice: () => void;
  sendBlinkCommand: () => void;
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
    protobufMsg,
    checkBluetoothAvailability,
    connectToBtDevice,
    disconnectDevice,
    sendBlinkCommand,
  } = useBluetoothConnection();

  return (
    <BluetoothContext.Provider value={{
      btDevice,
      isBtAvailable,
      protobufMsg,
      checkBluetoothAvailability,
      connectToBtDevice: async () => {
        await connectToBtDevice();
      },
      disconnectDevice,
      sendBlinkCommand,
    }}>
      {children}
    </BluetoothContext.Provider>
  );
}