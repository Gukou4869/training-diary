import * as React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AnimatePresence, motion } from 'framer-motion';
import { IError } from '@/store/error/models';
import ActionButton from '@/components/button/action/ActionButton';
import Input from '@/components/input/Input';
import styles from './SignupCard.module.scss';
import Alert from '@/components/alert/Alert';

interface SignupCardProps {
    error: IError;
    handleGoogleSignup?: () => void;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetError: () => void;
    handleSubmit?: () => void;
    moveToLogin: () => void;
}

const SignUpCard: React.VFC<SignupCardProps> = props => {
    const {
        error,
        handleGoogleSignup,
        moveToLogin,
        handleOnChange,
        handleResetError,
        handleSubmit,
    } = props;
    return (
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
                        initial={{ opacity: 0, x: 60 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        className={styles.test}
                    >
                        <Alert
                            message={error.errorMessage}
                            type="error"
                            onClose={handleResetError}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                className={styles.signupCard}
                exit={{
                    opacity: 0,
                    x: -60,
                    transition: {
                        duration: 0.2,
                    },
                }}
                initial={{ opacity: 0, x: 60 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.2,
                    },
                }}
            >
                <h1>サインアップ 📝</h1>
                <motion.button
                    type="button"
                    className={styles['signupCard__google']}
                    onClick={handleGoogleSignup}
                >
                    <span className={styles['signupCard__google__logo']}>
                        <FcGoogle />
                    </span>
                    Sign up With Google
                </motion.button>
                <div className={styles['signupCard__divider']}> - OR -</div>
                <div className={styles['signupCard__input']}>
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles['signupCard__input']}>
                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles['signupCard__input']}>
                    <Input
                        type="password"
                        label="Confirmed Password"
                        name="confirmed"
                        onChange={handleOnChange}
                    />
                </div>
                <ActionButton
                    label="Signup to Your Account"
                    size="lg"
                    onClick={handleSubmit}
                />
                <div className={styles['signupCard__footer']}>
                    もうメンバーですか？
                    <span
                        className={styles['signupCard__footer__backLogin']}
                        onClick={moveToLogin}
                    >
                        ログインしましょう！
                    </span>
                </div>
            </motion.div>
        </>
    );
};

export default SignUpCard;
