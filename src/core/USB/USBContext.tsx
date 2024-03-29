import React, { createContext, useContext, Context } from "react";
import useWebUSBConnection from "./hooks/useWebUSBConnection";

export interface WebUSBDevice extends USBDevice { }

export type USBContextProps = {
  usbDevice: WebUSBDevice | null;
  isUSBAvailable: boolean | null;
  isUSBConnected: boolean;
  dataReceived: string;
  checkUSBAvailability: () => void;
  connectToUSBDevice: () => Promise<void>;
  disconnectDevice: () => void;
  sendDataToDevice: (data: ArrayBuffer) => void;
  receiveDataFromDevice: () => void;
}

const USBContext: Context<USBContextProps | null> = createContext<USBContextProps | null>(null);
export const useUSB = () => {
  const ctx = useContext(USBContext);
  if (!ctx) {
    throw new Error('useUSB must be used within a USBProvider');
  }
  return ctx;
}

export const USBProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    usbDevice,
    isUSBAvailable,
    isUSBConnected,
    dataReceived,
    checkUSBAvailability,
    connectToUSBDevice,
    disconnectDevice,
    sendDataToDevice,
    receiveDataFromDevice,
  } = useWebUSBConnection();

  return (
    <USBContext.Provider value={{
      usbDevice,
      isUSBAvailable,
      isUSBConnected,
      dataReceived,
      checkUSBAvailability,
      connectToUSBDevice,
      disconnectDevice,
      sendDataToDevice,
      receiveDataFromDevice,
    }}>
      {children}
    </USBContext.Provider>
  );
}