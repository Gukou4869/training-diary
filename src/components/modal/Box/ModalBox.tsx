import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Backdrop from '../../overlay/Backdrop';
import styles from '@/styles/components/Modal.module.scss';

interface ModalBoxProps {
    children?: React.ReactElement;
    open?: boolean;
    handleClose?: () => void;
}

const ModalBox: React.VFC<ModalBoxProps> = props => {
    const { children, handleClose } = props;
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
                className={styles.modalBox}
                onClick={e => {
                    e.stopPropagation();
                }}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button
                    className={styles['modalBox__close']}
                    onClick={handleClose}
                    type="button"
                >
                    <FaTimes />
                </button>
                {children}
            </motion.div>
        </Backdrop>
    );
};

export default ModalBox;
