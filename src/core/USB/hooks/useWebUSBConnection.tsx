import { useState } from "react";
import { WebUSBDevice, USBContextProps } from "../USBContext";
import { StatusMessageProps, useStatusMessage } from "../../../shared/statusMessagesContext";

const filters = [{ vendorId: 0x04d8 }];

const useWebUSBConnection = () => {
  const [isUSBAvailable, setIsUSBAvailable] = useState<boolean | null>(null);
  const [usbDevice, setUsbDevice] = useState<WebUSBDevice | null>(null);
  const [isUSBConnected, setIsUSBConnected] = useState<boolean>(false);
  const [dataReceived, setDataReceived] = useState<string>("");

  const { addMessage } = useStatusMessage();

  const checkUSBAvailability = () => {
    const available = "usb" in navigator && (navigator as any).usb !== undefined;
    setIsUSBAvailable(available);
    const okMsg: StatusMessageProps = {
      message: "USB is available",
      msgType: "success",
      autoDismiss: true,
      timeout: 3000,
    };
    const errMsg: StatusMessageProps = { message: "USB API is not available.\nPlease, use supported browser.", msgType: "error" };
    addMessage(available ? okMsg : errMsg);
  };

  const connectToUSBDevice1 = async () => {
    if (!isUSBAvailable) return null;
    try {
      const device = await navigator.usb.requestDevice({ filters });
      await device.open();
      if (device.configuration === null) {
        await device.selectConfiguration(1);
      }
      await device.claimInterface(0);
      setUsbDevice(device);
      setIsUSBConnected(true);
      addMessage({ message: "Device connected", msgType: "success", autoDismiss: true, timeout: 3000, });
    } catch (err) {
      console.error("Error:", err);
      addMessage({ message: `Error connecting to device: ${err}`, msgType: "error" });
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
      addMessage({ message: `Error disconnecting device: ${err}`, msgType: "error" });
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

  const connectToUSBDevice = async () => {
    if (!(navigator as any).serial) return;

    (navigator as any).serial.addEventListener("connect", (event: any) => {
      console.log("Connected:", event);
      addMessage({ message: "Device connected", msgType: "success", autoDismiss: true, timeout: 3000 });
    });

    (navigator as any).serial.addEventListener("disconnect", (event: any) => {
      console.log("Disconnected:", event);
      addMessage({ message: "Device disconnected", msgType: "warning", autoDismiss: true, timeout: 3000 });
    });

    (navigator as any).serial.getPorts().then((ports: any) => {
      console.log("Ports:", ports);
      addMessage({ message: `"Ports:" + ${ports}`, msgType: "info", autoDismiss: true, timeout: 3000 });
    });

    try {
      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate: 250000 });
      while (port.readable) {
        const reader = port.readable.getReader();
        addMessage({ message: "Reader created", msgType: "info", autoDismiss: true, timeout: 3000 });
        while (true) {
          const { value, done } = await reader.read();
          console.log("Value:", value);
          console.log("Done:", done);
          if (done) {
            reader.releaseLock();
            addMessage({ message: "Reader released", msgType: "info", autoDismiss: true, timeout: 3000 });
          }
          if (value) {
            const decoder = new TextDecoder();
            const data = decoder.decode(value);
            console.log("Data received:", data);
            setDataReceived(data);
          }
          addMessage({ message: "Data received", msgType: "success", autoDismiss: true, timeout: 3000 });
        }
      }
    } catch (err) {
      console.error("Error connecting to serial device:", err);
      addMessage({ message: `Error connecting to serial device: ${err}`, msgType: "error" });
    } finally {
      addMessage({ message: "Connection closed", msgType: "warning", autoDismiss: true, timeout: 3000 });
    }
  }

  return {
    usbDevice,
    isUSBAvailable,
    isUSBConnected,
    dataReceived,
    checkUSBAvailability,
    connectToUSBDevice,
    disconnectDevice,
    sendDataToDevice,
    receiveDataFromDevice,
  } as USBContextProps;

};

export default useWebUSBConnection;
