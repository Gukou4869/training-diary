import React from 'react';
import { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
    name?: string;
    hasError?: boolean;
    label: string;
    size?: string;
    type: 'number' | 'text' | 'password' | 'email';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.VFC<InputProps> = ({
    name,
    hasError,
    label,
    size,
    type,
    onChange,
}) => {
    //set show password (boolean)
    const [show, setShow] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        const input = document.getElementsByName(
            'password',
        )[0] as HTMLInputElement;
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
        setShow(prevState => !prevState);
    };

    return (
        <div className={styles.form}>
            <input
                className={`${styles['form__input']} ${
                    hasError ? styles['form__input--hasError'] : ''
                }`}
                type={type}
                name={name}
                autoComplete="off"
                placeholder=" "
                onChange={onChange}
            />
            <label className={styles['form__label']}>{label}</label>
            {type === 'password' ? (
                <span
                    className={styles['form__eye']}
                    onClick={togglePasswordVisibility}
                >
                    {show ? '🐵' : '🙈'}
                </span>
            ) : null}
        </div>
    );
};

export default Input;
