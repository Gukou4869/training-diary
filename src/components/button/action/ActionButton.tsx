import React from 'react';
import { motion } from 'framer-motion';
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
    backgroundColor?: string;
    color?: string;
    float?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    block?: boolean;
    onClick?: () => void;
}

const ActionButton: React.VFC<ActionButtonProps> = ({
    block,
    color,
    backgroundColor,
    float,
    label,
    size,
    onClick,
}) => {
    // document.documentElement.style.setProperty('--color', color.toString());
    // document.documentElement.style.setProperty(
    //     '--bg-color',
    //     backgroundColor.toString(),
    // );
    const hasFloat = float ? 'button--float' : '';
    const buttonSize = size ? `button--${size}` : 'button--md';
    const buttonWidth = block ? 'button--block' : '';
    return (
        <motion.button
            whileTap={{ scale: 0.99 }}
            type="button"
            className={`${styles['button']} ${styles[buttonSize]} ${styles[hasFloat]} ${styles[buttonWidth]}`}
            onClick={onClick}
        >
            {label}
        </motion.button>
    );
};

export default ActionButton;
