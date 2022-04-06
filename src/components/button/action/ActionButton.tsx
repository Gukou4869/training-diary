import React from 'react';
import { motion } from 'framer-motion';
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
    float?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    block?: boolean;
    onClick?: () => void;
}

const ActionButton: React.VFC<ActionButtonProps> = ({ block, float, label, size, onClick }) => {
    const hasFloat = float ? 'button--float' : '';
    const buttonSize = size ? `button--${size}` : 'button--md';
    const buttonWidth = block ? 'button--block' : '';
    return (
        <motion.button
            whileTap={{
                scale: 0.99,
            }}
            type="button"
            className={`${styles.button} ${styles[buttonSize]} ${styles[hasFloat]} ${styles[buttonWidth]}`}
            onClick={onClick}
        >
            {label}
        </motion.button>
    );
};

export default ActionButton;
