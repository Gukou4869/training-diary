import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onClick?: () => void;
}

const Checkbox: React.VFC<CheckboxProps> = ({ label, checked, onClick }) => (
    <div className={styles.checkbox}>
        <div
            role="checkbox"
            aria-checked="true"
            tabIndex={0}
            className={`${styles.checkbox__circle} ${checked && styles['checkbox__circle--open']}`}
            onClick={onClick}
            onKeyDown={onClick}
        >
            {checked ? (
                <>
                    <span className={styles.cover1} />
                    <span className={styles.cover2} />
                    <span className={styles.check}>
                        <AiOutlineCheck />
                    </span>
                </>
            ) : null}
        </div>
        <p className={styles.checkbox__label}>{label}</p>
    </div>
);

export default Checkbox;
