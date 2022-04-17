import React, { useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    name?: string;
    hasError?: boolean;
    label: string;
    type: "number" | "text" | "password" | "email";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.VFC<InputProps> = ({ name, hasError, label, type, onChange }) => {
    // set show password (boolean)
    const [show, setShow] = useState<boolean>(false);

    const togglePasswordVisibility = (): void => {
        const input = document.getElementsByName(name)[0] as HTMLInputElement;
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
        setShow((prevState) => !prevState);
    };

    return (
        <div className={styles.form}>
            <input
                className={`${styles.form__input} ${
                    hasError ? styles["form__input--hasError"] : ""
                }`}
                type={type}
                name={name}
                autoComplete="off"
                placeholder=" "
                onChange={onChange}
            />
            <label htmlFor="input" className={styles.form__label}>
                {label}
            </label>
            {type === "password" ? (
                <span
                    role="checkbox"
                    aria-checked
                    tabIndex={0}
                    className={styles.form__eye}
                    onClick={togglePasswordVisibility}
                    onKeyDown={togglePasswordVisibility}
                >
                    {show ? "🐵" : "🙈"}
                </span>
            ) : null}
        </div>
    );
};

export default Input;
