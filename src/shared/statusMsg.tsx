import React, { useState, useEffect } from 'react';
import styles from './statusMsg.module.scss';

export type StatusMessageProps = {
  message: string;
  msgType: 'info' | 'success' | 'warning' | 'error';
  autoDismiss?: boolean;
  timeout?: number;
  onDismiss?: () => void;
}

class StatusMessage extends React.Component<StatusMessageProps> {
  static defaultProps = {
    autoDismiss: true,
    timeout: 5000,
    onDismiss: () => { },
  };
  timerID: NodeJS.Timeout | null = null;
  state = {
    fadingOut: false,
  };

  componentDidMount(): void {
    if (true === this.props.autoDismiss) {
      this.timerID = setTimeout(() => {
        this.dismissMessage();
      }, this.props.timeout ?? StatusMessage.defaultProps.timeout);
    }
  }

  componentWillUnmount(): void {
    if (this.timerID) {
      clearTimeout(this.timerID);
    }
  }

  dismissMessage = (): void => {
    this.setState({ fadingOut: true });
    setTimeout(() => {
      if (this.props.onDismiss) {
        this.props.onDismiss();
      }
    }, 500);
  };

  render() {
    const { message, msgType } = this.props;
    const { fadingOut } = this.state;
    const statusBoxClass = `${styles.statusBox} ${styles[msgType]} ${fadingOut ? styles.fadeOut : ''}`;
    return (
      <div className={statusBoxClass} onClick={this.dismissMessage}>
        <span>{message}</span>
      </div>
    )
  }
}

export default StatusMessage;