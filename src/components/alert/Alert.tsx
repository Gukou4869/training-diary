import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styles from './alert.module.scss';

interface AlertProps {
  type?: 'error' | 'success' | 'warning';
  message?: string;
  autoClose?: boolean;
  onClose?: () => void;
}

const Alert: React.VFC<AlertProps> = ({ type, message, autoClose, onClose }) => {
  const alertType = `alert--${type}`;
  const icons = (alert: 'error' | 'success' | 'warning'): React.ReactElement => {
    switch (alert) {
      case 'error':
        return (
          <div className={`${styles.alert__icon} ${styles['alert__icon--error']}`}>
            <MdOutlineErrorOutline />
          </div>
        );
      case 'success':
        return (
          <div className={`${styles.alert__icon} ${styles['alert__icon--error']}`}>
            <AiOutlineCheckCircle />
          </div>
        );
      default:
        return null;
    }
  };
  if (autoClose) {
    setTimeout(() => {
      onClose();
    }, 3000);
  }

  return (
    <div className={`${styles.alert} ${styles[alertType]}`}>
      {icons(type)}
      <div className="alert__message">{message}</div>
      {!autoClose && (
        <button className={styles.alert__close} type="button" onClick={onClose}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;
