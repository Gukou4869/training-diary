import * as React from 'react';
import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Backdrop from '../overlay/Backdrop';
import styles from '@/styles/components/Modal.module.scss';

interface ModalProps {
    children?: React.ReactElement;
    clickOutside?: boolean;
    maxWidth?: string;
    open?: boolean;
    title?: string;
    toggleModal?: (event: React.MouseEvent) => void;
    handleClose?: () => void;
}

const Modal: React.VFC<ModalProps> = props => {
    const {
        children,
        clickOutside,
        maxWidth,
        open,
        title,
        toggleModal,
        handleClose,
    } = props;

    const dropIn = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: { y: '100vh', opacity: 0 },
    };
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                className={styles.modal}
                onClick={e => {
                    e.stopPropagation();
                }}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            ></motion.div>
        </Backdrop>
    );
};

export default Modal;
