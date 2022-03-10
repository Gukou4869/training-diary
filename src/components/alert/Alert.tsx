import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styles from './alert.module.scss';
import { IconType } from 'react-icons';

interface AlertProps {
    type?: 'error' | 'success' | 'warning';
    message?: string;
    autoClose?: boolean;
    onClose?: () => void;
}

const Alert: React.VFC<AlertProps> = ({
    type,
    message,
    autoClose,
    onClose,
}) => {
    const alertType = `alert--${type}`;
    const icons = (
        type: 'error' | 'success' | 'warning',
    ): React.ReactElement => {
        switch (type) {
            case 'error':
                return (
                    <div
                        className={`${styles['alert__icon']} ${styles['alert__icon--error']}`}
                    >
                        <MdOutlineErrorOutline />
                    </div>
                );
            case 'success':
                return (
                    <div
                        className={`${styles['alert__icon']} ${styles['alert__icon--error']}`}
                    >
                        <AiOutlineCheckCircle />
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <div className={`${styles.alert} ${styles[alertType]}`}>
            {icons(type)}
            <div className="alert__message">{message}</div>
            <button className={styles['alert__close']} type="button">
                <FaTimes />
            </button>
        </div>
    );
};

export default Alert;
