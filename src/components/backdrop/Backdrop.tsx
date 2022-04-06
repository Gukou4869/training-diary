import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './Backdrop.module.scss';

interface BackdropProps {
    children?: React.ReactElement;
    disabled?: boolean;
    onClick?: () => void;
}

const Backdrop: React.VFC<BackdropProps> = ({ children, disabled, onClick }) => (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        exit={{
            opacity: 0,
        }}
        className={!disabled ? styles.backdrop : styles.disabledBackdrop}
        onClick={onClick}
    >
        {children}
    </motion.div>
);

export default Backdrop;
