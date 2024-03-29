import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { StatusMessageDisplay } from "./statusMessages";
import { AppMessagesDefaultDisplayConfig } from "./statusMessages";
import { v4 as uuidv4 } from "uuid";

export type StatusMessageProps = {
  message: string;
  msgType: 'info' | 'success' | 'warning' | 'error';
  autoDismiss?: boolean;
  timeout?: number;
  fadeOut?: boolean;
}

export type AppMessage = StatusMessageProps & { id: string };

export type StatusMessageContextType = {
  addMessage: (message: StatusMessageProps) => void;
}

const AppMessagesDefaultConfig = {
  maxMessages: 20,
  autoDismiss: true,
  timeout: 3000,
  errorTimeout: 15000,
}

const StatusMessageContext = createContext<StatusMessageContextType | undefined>(undefined);

type StatusMessageProviderProps = {
  children: ReactNode;
}

export const StatusMessageProvider: React.FC<StatusMessageProviderProps> = ({ children }) => {
  const ctx = useContext(StatusMessageContext);
  if (ctx) {
    throw new Error('StatusMessageProvider must be used only once');
  }

  const [messages, setMessages] = useState<AppMessage[]>([]);

  const addMessage = useCallback((msg: StatusMessageProps): void => {
    if (messages.length >= AppMessagesDefaultConfig.maxMessages) return;

    const id = uuidv4();
    setMessages((prevMessages) => [...prevMessages, { ...msg, id }]);

    if ('error' !== msg.msgType && (msg.autoDismiss ?? AppMessagesDefaultConfig.autoDismiss)) {
      setTimeout(() => {
        dismissMessage(id);
      }, msg.timeout ?? AppMessagesDefaultConfig.timeout);
    }

    if ('error' === msg.msgType) {
      setTimeout(() => {
        dismissMessage(id);
      }, msg.timeout ?? AppMessagesDefaultConfig.errorTimeout);
    }
    
  }, [messages]);

  const dismissMessage = useCallback((id: string): void => {
    setMessages(
      (prevMessages) => prevMessages.map((m) => m.id === id ? { ...m, fadeOut: true } : m)
    )
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.filter((m) => m.id !== id));
    }, AppMessagesDefaultDisplayConfig.fadeOutTime);
  }, []);

  return (
    <StatusMessageContext.Provider value={{ addMessage }}>
      {children}
      <StatusMessageDisplay messages={messages} dismissMessage={dismissMessage} />
    </StatusMessageContext.Provider>
  );
}

export const useStatusMessage = () => {
  const context = useContext(StatusMessageContext);
  if (context === undefined) {
    throw new Error('useStatusMessage must be used within a StatusMessageProvider');
  }
  return context;
}
