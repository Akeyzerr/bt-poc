import React from 'react';
import styles from './statusMsg.module.scss';

export type StatusMessageProps = {
  message: string;
  msgType: 'info' | 'success' | 'warning' | 'error';
  autoDismiss?: boolean;
  timeout?: number;
  onDismiss?: () => void;
}

class StatusMessage extends React.Component<StatusMessageProps> {
  timerID: NodeJS.Timeout | null = null;

  componentDidMount(): void {
    if (this.props.autoDismiss) {
      this.timerID = setTimeout(() => {
        this.dismissMessage();
      }, this.props.timeout ?? 5000);
    }
  }

  componentWillUnmount(): void {
    if (this.timerID) {
      clearTimeout(this.timerID);
    }
  }

  dismissMessage = (): void => {
    this.timerID = null;
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  };

  render() {
    const { message, msgType } = this.props;
    return (
      <div className={`${styles.statusBox} ${styles[msgType]}`}>
        <span>{message}</span>
        <button onClick={this.dismissMessage}>X</button>
      </div>
    )
  }
}

export default StatusMessage;