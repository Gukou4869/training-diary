import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCheck } from 'react-icons/ai';
import styles from '@/styles/components/Checkbox.module.scss';

interface CheckboxProps {
    label?: string;
    open?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

const Checkbox: React.VFC<CheckboxProps> = ({ label, open, size, onClick }) => {
    return (
        <div className={styles.checkbox}>
            <div
                className={`${styles['checkbox__circle']} ${
                    open && styles['checkbox__circle--open']
                }`}
                onClick={onClick}
            >
                {open ? (
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
