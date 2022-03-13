import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './authLoading.module.scss';

interface IAuthLoadingProps {
    loading: boolean;
}

const AuthLoading: React.VFC<IAuthLoadingProps> = ({ loading }) => {
    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const loadingCircleVariants = {
        start: {
            y: '200%',
            opacity: 0,
        },
        end: {
            opacity: 1,
        },
    };

    const loadingCircleTransition = {
        duration: 0.7,
        yoyo: Infinity,
        ease: 'easeInOut',
    };
    if (!loading) return null;
    return (
        <motion.div
            className={styles.authLoading}
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            Authorizing
            <div className={styles.authLoadingText}></div>
            <motion.span
                className={styles.authLoadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span
                className={styles.authLoadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span
                className={styles.authLoadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </motion.div>
    );
};

export default AuthLoading;
