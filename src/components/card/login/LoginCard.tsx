import * as React from "react";
import { FcGoogle } from "react-icons/fc";
import { AnimatePresence, motion } from "framer-motion";
import { IError } from "@/store/error/models";
import TextInput from "@/components/input/Input";
import ActionButton from "@/components/button/action/ActionButton";
import Alert from "@/components/alert/Alert";
import Checkbox from "@/components/checkbox/Checkbox";
import Row from "@/components/row/Row";
import Column from "@/components/column/Column";
import FlexBox from "@/components/flexbox/Flexbox";
import styles from "./LoginCard.module.scss";

interface LoginCardProps {
    error: IError;
    checked?: boolean;
    handleChecked?: () => void;
    handleGoogleLogin?: () => void;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetError: () => void;
    handleSubmit?: () => void;
    moveToSignup: () => void;
}

const LoginCard: React.VFC<LoginCardProps> = ({
    checked,
    error,
    handleChecked,
    handleGoogleLogin,
    handleOnChange,
    handleResetError,
    handleSubmit,
    moveToSignup,
}) => (
    <>
        <AnimatePresence>
            {error.hasError && (
                <motion.div
                    exit={{
                        opacity: 0,
                        x: 60,
                        transition: {
                            duration: 0.2,
                        },
                    }}
                    initial={{
                        opacity: 0,
                        x: 60,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.2,
                        },
                    }}
                    className={styles.test}
                >
                    <Alert message={error.errorMessage} type="error" onClose={handleResetError} />
                </motion.div>
            )}
        </AnimatePresence>
        <motion.div
            className={styles.loginCard}
            exit={{
                opacity: 0,
                x: -60,
                transition: {
                    duration: 0.2,
                },
            }}
            initial={{
                opacity: 0,
                x: 60,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.2,
                },
            }}
        >
            <h1>ログイン 🔏</h1>
            <motion.button
                type="button"
                className={styles.loginCard__google}
                onClick={handleGoogleLogin}
            >
                <span className={styles.loginCard__google__logo}>
                    <FcGoogle />
                </span>
                Login With Google
            </motion.button>
            <div className={styles.loginCard__divider}> - OR -</div>
            <div className={styles.loginCard__input}>
                <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    onChange={handleOnChange}
                    hasError={error.hasError}
                />
            </div>
            <div className={styles.loginCard__input}>
                <TextInput
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleOnChange}
                />
            </div>
            <Row>
                <Column xs={6} md={6}>
                    <FlexBox align="center" justify="start">
                        <Checkbox label="Remenber Me" checked={checked} onClick={handleChecked} />
                    </FlexBox>
                </Column>
                <Column xs={6} md={6}>
                    <FlexBox align="center" justify="end">
                        <p className={styles["loginCard__password-reset"]}>
                            パスワードを忘れましたか？
                        </p>
                    </FlexBox>
                </Column>
            </Row>
            <ActionButton label="Login to Your Account" size="lg" onClick={handleSubmit} />
            <div className={styles.loginCard__footer}>
                メンバーではない?
                <span
                    role="link"
                    tabIndex={0}
                    className={styles.loginCard__footer__goToSignup}
                    onClick={moveToSignup}
                    onKeyDown={moveToSignup}
                >
                    いますぐサインアップ！
                </span>
            </div>
        </motion.div>
    </>
);

export default LoginCard;
