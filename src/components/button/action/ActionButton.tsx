import React from 'react';
import styles from '@/styles/components/ActionButton.module.scss';

interface ActionButtonProps {
    backgroundColor: string;
    color: string;
    float?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

const ActionButton: React.VFC<ActionButtonProps> = ({
    color,
    backgroundColor,
    float,
    label,
    size,
    onClick,
}) => {
    document.documentElement.style.setProperty('--color', color.toString());
    document.documentElement.style.setProperty(
        '--bg-color',
        backgroundColor.toString(),
    );
    const hasFloat = float ? 'gukouui-button--float' : '';
    const buttonSize = size ? `gukouui-button--${size}` : 'gukouui-button--md';
    return (
        <button
            type="button"
            className={`${styles['gukouui-button']} ${styles[buttonSize]} ${styles[hasFloat]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ActionButton;
