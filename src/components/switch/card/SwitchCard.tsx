import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    LoginInputParams,
    SignupInputParams,
} from '@/screens/home/Home.Container';
import LoginCard from '../../card/login/LoginCard';
import SignupCard from '../../card/signup/SignupCard';

interface SwitchCardProps {
    checked?: boolean;
    loginInput: LoginInputParams;
    signupInput: SignupInputParams;
    handleChecked?: () => void;
    handleGoogleLogin?: () => void;
    handleOnChangeLoginInput: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    handleOnChangeSignupInput: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    handleLogin?: () => void;
    handleSignup?: () => void;
}

const SwitchCard: React.VFC<SwitchCardProps> = props => {
    const {
        checked,
        handleChecked,
        handleOnChangeLoginInput,
        handleOnChangeSignupInput,
        handleGoogleLogin,
        handleLogin,
        handleSignup,
    } = props;
    // switch login and sign up
    const [toggleCard, setToggleCard] = useState<boolean>(true);

    const handleToggleCard = (): void => {
        setToggleCard(prevState => !prevState);
    };
    return (
        <>
            <AnimatePresence initial={false} exitBeforeEnter>
                {toggleCard && (
                    <LoginCard
                        key={1}
                        checked={checked}
                        handleChecked={handleChecked}
                        handleOnChange={handleOnChangeLoginInput}
                        handleGoogleLogin={handleGoogleLogin}
                        moveToSignup={handleToggleCard}
                        handleSubmit={handleLogin}
                    />
                )}
                {!toggleCard && (
                    <SignupCard
                        key={2}
                        moveToLogin={handleToggleCard}
                        handleGoogleSignup={handleGoogleLogin}
                        handleOnChange={handleOnChangeSignupInput}
                        handleSubmit={handleSignup}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SwitchCard;
