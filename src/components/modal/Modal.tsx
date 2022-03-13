import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';
import styles from './Modal.module.scss';

interface ModalProps {
    children?: React.ReactElement;
    open?: boolean;
    handleClose?: () => void;
}

const Modal: React.VFC<ModalProps> = props => {
    const { children, handleClose } = props;
    const dropIn = {
        hidden: { y: '-15vh', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                stiffness: 100,
            },
        },
        exit: { y: '-10vh', opacity: 0 },
    };
    return (
        <Backdrop>
            <motion.div
                className={styles.modal}
                onClick={e => {
                    e.stopPropagation();
                }}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className={styles['modal__close']} onClick={handleClose}>
                    <div className={styles['modal__close__btn']}>
                        <FaTimes />
                    </div>
                </div>
                {children}
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
