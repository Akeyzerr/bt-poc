import { useState } from "react";
import { WebUSBDevice, USBContextProps } from "../USBContext";
import { StatusMessageProps } from "../../../shared/statusMsg";

const filters = [{ vendorId: 0x04d8, productId: 0x000a }];

const useWebUSBConnection = () => {
  const [isUSBAvailable, setIsUSBAvailable] = useState<boolean | null>(null);
  const [usbDevice, setUsbDevice] = useState<WebUSBDevice | null>(null);
  const [isUSBConnected, setIsUSBConnected] = useState<boolean>(false);
  const [dataReceived, setDataReceived] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [USBStatusMessage, setUSBStatusMessage] = useState<StatusMessageProps | null>(null);

  const checkUSBAvailability = () => {
    const available = "usb" in navigator && (navigator as any).usb !== undefined;
    setIsUSBAvailable(available);
    const okMsg: StatusMessageProps = {
      message: "USB is available",
      msgType: "success",
      autoDismiss: true,
      timeout: 3000,
    };
    const errMsg: StatusMessageProps = {
      message: "USB API is not available.\nPlease, use supported browser.",
      msgType: "error",
      autoDismiss: false,
    };
    setUSBStatusMessage(available ? okMsg : errMsg);
  };

  const dissmissUSBStatusMessage = () => { setUSBStatusMessage(null); };

  const connectToUSBDevice = async () => {
    if (!isUSBAvailable) return null;
    try {
      const device = await navigator.usb.requestDevice({ filters });
      await device.open();
      setUSBStatusMessage({
        message: "Device connected",
        msgType: "success",
        autoDismiss: true,
        timeout: 3000,
      });
      if (device.configuration === null)
        await device.selectConfiguration(1); // Select configuration #1 for the device.
      await device.claimInterface(0); // Claim interface #0.
      setUsbDevice(device);
      setIsUSBConnected(true);
    } catch (err) {
      console.error("Error:", err);
      setError(`Error connecting to device: ${err}`);
      setUSBStatusMessage({
        message: `Error connecting to device: ${err}`,
        msgType: "error",
        autoDismiss: false,
      });
    }
  };

  const disconnectDevice = async () => {
    if (!usbDevice) return;
    try {
      await usbDevice.close();
      setUsbDevice(null);
      setIsUSBConnected(false);
    } catch (err) {
      console.error("Error:", err);
      setError(`Error disconnecting device: ${err}`);
    }
  };

  const sendDataToDevice = async (data: ArrayBuffer) => {
    if (!usbDevice) return;
    try {
      await usbDevice.transferOut(1, data); // Endpoint #1
    } catch (err) {
      console.error("Error sending data:", err);
      setError(`Error sending data: ${err}`);
    }
  };

  const receiveDataFromDevice = async () => {
    if (!usbDevice) return;
    try {
      const result = await usbDevice.transferIn(1, 64); // Endpoint #1, expecting 64 bytes
      const decoder = new TextDecoder();
      const data = decoder.decode(result.data);
      setDataReceived(data);
    } catch (err) {
      console.error("Error receiving data:", err);
      setError(`Error receiving data: ${err}`);
    }
  };

  return {
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
  } as USBContextProps;

};

export default useWebUSBConnection;
