import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styles from '@/styles/components/Checkbox.module.scss';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

const Checkbox: React.VFC<CheckboxProps> = ({
    label,
    checked,
    size,
    onClick,
}) => {
    return (
        <div className={styles.checkbox}>
            <div
                className={`${styles['checkbox__circle']} ${
                    checked && styles['checkbox__circle--open']
                }`}
                onClick={onClick}
            >
                {checked ? (
                    <>
                        <span className={styles.cover1}></span>
                        <span className={styles.cover2}></span>
                        <span className={styles.check}>
                            <AiOutlineCheck />
                        </span>
                    </>
                ) : null}
            </div>
            <p className={styles['checkbox__label']}>{label}</p>
        </div>
    );
};

export default Checkbox;
