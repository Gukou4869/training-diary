import * as React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Login.module.scss';

interface LoginProps {
    children?: React.ReactElement;
    open?: boolean;
    handleClose?: () => void;
}

const Login: React.VFC<LoginProps> = props => {
    const { children, handleClose } = props;
    return (
        <div className={styles.login}>
            <h1>Login to Your Account</h1>
            <motion.button type="button" className={styles['login__google']}>
                <span className={styles['login__google__logo']}>
                    <FcGoogle />
                </span>
                Login With Google
            </motion.button>
            <div className={styles['login__divider']}> - OR -</div>
        </div>
    );
};

export default Login;
