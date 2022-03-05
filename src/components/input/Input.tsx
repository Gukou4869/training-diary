import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from '@/styles/components/Input.module.scss';

interface InputProps {
    name?: string;
    hasError?: boolean;
    label: string;
    size?: string;
    type: 'number' | 'text' | 'password' | 'email';
    validate?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    const [inputType, setInputType] = useState<HTMLInputElement | null>(null);

    useEffect(() => {
        const inputType = document.getElementById(
            'gukouui-form__input',
        ) as HTMLInputElement;
        if (inputType.type === 'password') {
            setInputType(inputType);
        }
    }, []);

    const handleToggleEye = () => {
        inputType.type === 'password'
            ? ((inputType.type = 'text'), setShow(true))
            : ((inputType.type = 'password'), setShow(false));
    };

    return (
        <div className={styles.form}>
            <input
                className={`${styles['form__input']} ${
                    hasError ? styles['form__input--hasError'] : ''
                }`}
                id="gukouui-form__input"
                type={type}
                name={name}
                autoComplete="off"
                placeholder=" "
            />
            <label className={styles['form__label']}>{label}</label>
            {type === 'password' ? (
                <span className={styles['form__eye']} onClick={handleToggleEye}>
                    {inputType && show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
            ) : null}
        </div>
    );
};

export default Input;
