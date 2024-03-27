import React, { createContext, useContext, Context } from "react";
import useWebUSBConnection from "./hooks/useWebUSBConnection";
import { StatusMessageProps } from "../../shared/statusMsg";

export interface WebUSBDevice extends USBDevice { }

export type USBContextProps = {
  usbDevice: WebUSBDevice | null;
  isUSBAvailable: boolean | null;
  isUSBConnected: boolean;
  dataReceived: string;
  USBStatusMessage: StatusMessageProps | null;
  error: string;
  checkUSBAvailability: () => void;
  connectToUSBDevice: () => Promise<void>;
  disconnectDevice: () => void;
  sendDataToDevice: (data: ArrayBuffer) => void;
  receiveDataFromDevice: () => void;
  dissmissUSBStatusMessage: () => void;
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
    error,
    USBStatusMessage,
    checkUSBAvailability,
    connectToUSBDevice,
    disconnectDevice,
    sendDataToDevice,
    receiveDataFromDevice,
    dissmissUSBStatusMessage,
  } = useWebUSBConnection();

  return (
    <USBContext.Provider value={{
      usbDevice,
      isUSBAvailable,
      isUSBConnected,
      dataReceived,
      error,
      USBStatusMessage,
      checkUSBAvailability,
      connectToUSBDevice,
      disconnectDevice,
      sendDataToDevice,
      receiveDataFromDevice,
      dissmissUSBStatusMessage,
    }}>
      {children}
    </USBContext.Provider>
  );
}