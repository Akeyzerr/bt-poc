import React from 'react';
import styles from './statusMessages.module.scss';
import { AppMessage } from './statusMessagesContext';

type StatusMessageDisplayProps = {
  messages: AppMessage[];
  dismissMessage: (id: string) => void;
}

export const AppMessagesDefaultDisplayConfig = {
  fadeInTime: 600,
  fadeOutTime: 750,
}

export const StatusMessageDisplay: React.FC<StatusMessageDisplayProps> = ({ messages, dismissMessage }) => {
  return (
    <div className={styles.msgContainer}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          onClick={() => dismissMessage(msg.id)}
          className={`
          ${styles.statusBox}
          ${styles[msg.msgType]}
          ${msg.fadeOut ? styles.fadeOut : ''}`}
          style={
            {
              '--fade-in-duration': `${AppMessagesDefaultDisplayConfig.fadeInTime}ms`,
              '--fade-out-duration': `${AppMessagesDefaultDisplayConfig.fadeOutTime}ms`
            } as React.CSSProperties}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};