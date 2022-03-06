import * as React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Input from '@/components/input/Input';
import ActionButton from '@/components/button/action/ActionButton';
import Checkbox from '@/components/checkbox/Checkbox';
import Row from '@/components/row/Row';
import Column from '@/components/column/Column';
import FlexBox from '@/components/flexbox/Flexbox';
import styles from '@/styles/components/LoginCard.module.scss';

interface LoginCardProps {
    checked?: boolean;
    handleChecked?: () => void;
    handleGoogleLogin?: () => void;
    handleSubmit?: () => void;
}

const LoginCard: React.VFC<LoginCardProps> = props => {
    const { checked, handleChecked, handleGoogleLogin } = props;
    return (
        <div className={styles.loginCard}>
            <h1>Login to Your Account</h1>
            <motion.button
                type="button"
                className={styles['loginCard__google']}
                onClick={handleGoogleLogin}
            >
                <span className={styles['loginCard__google__logo']}>
                    <FcGoogle />
                </span>
                Login With Google
            </motion.button>
            <div className={styles['loginCard__divider']}> - OR -</div>
            <div className={styles['loginCard__input']}>
                <Input type="email" label="Email" />
            </div>
            <div className={styles['loginCard__input']}>
                <Input type="password" label="Password" />
            </div>

            <Row>
                <Column xs={6} md={6}>
                    <FlexBox align="center" justify="start">
                        <Checkbox
                            label="Remenber Me"
                            checked={checked}
                            onClick={handleChecked}
                        />
                    </FlexBox>
                </Column>
                <Column xs={6} md={6}>
                    <FlexBox align="center" justify="end">
                        <motion.p
                            className={styles['loginCard__password-reset']}
                        >
                            Forget Password?
                        </motion.p>
                    </FlexBox>
                </Column>
            </Row>
            <ActionButton label="Login to Your Account" size="lg" />
            <div className={styles['loginCard__footer']}>
                Not a member now?
                <span className=""> Register Now</span>
            </div>
        </div>
    );
};

export default LoginCard;
