import * as React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '@/components/input/Input';
import ActionButton from '@/components/button/action/ActionButton';
import styles from '@/styles/components/SignupCard.module.scss';

interface SignupCardProps {
    handleGoogleLogin?: () => void;
    handleSubmit?: () => void;
    moveToLogin: () => void;
}

const SignUpCard: React.VFC<SignupCardProps> = props => {
    const { handleGoogleLogin, moveToLogin } = props;
    return (
        <motion.div
            className={styles.signupCard}
            exit={{
                opacity: 0,
                x: -60,
                transition: {
                    duration: 0.5,
                },
            }}
            initial={{ opacity: 0, x: 60 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
        >
            <h1>Sing up to Your Account</h1>
            <motion.button
                type="button"
                className={styles['signupCard__google']}
                onClick={handleGoogleLogin}
            >
                <span className={styles['signupCard__google__logo']}>
                    <FcGoogle />
                </span>
                Sign up With Google
            </motion.button>
            <div className={styles['signupCard__divider']}> - OR -</div>
            <div className={styles['signupCard__input']}>
                <Input type="email" label="Email" />
            </div>
            <div className={styles['signupCard__input']}>
                <Input type="password" label="Password" />
            </div>
            <div className={styles['signupCard__input']}>
                <Input type="password" label="Confirmed Password" />
            </div>
            <ActionButton label="Signup to Your Account" size="lg" />
            <div className={styles['signupCard__footer']}>
                You are already a member?
                <span
                    className={styles['signupCard__footer__backLogin']}
                    onClick={moveToLogin}
                >
                    Login with your account
                </span>
            </div>
        </motion.div>
    );
};

export default SignUpCard;
