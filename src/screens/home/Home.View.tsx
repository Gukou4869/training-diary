import * as React from 'react';
import { useState } from 'react';
import Header from '@/components/header/Header';
import googleLogin from '@/services/auth/GoogleLogin';
import SwitchCard from '@/components/switch/card/SwitchCard';
import Modal from '@/components/modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { LoginInputParams, SignupInputParams } from './Home.Container';

interface HomeContainerProps {
    checked: boolean;
    loginInput: LoginInputParams;
    signupInput: SignupInputParams;
    handleOnChangeLoginInput: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    handleOnChangeSignupInput: (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    handleToggleChecked: () => void;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
    checked,
    loginInput,
    signupInput,
    handleOnChangeLoginInput,
    handleOnChangeSignupInput,
    handleToggleChecked,
}) => {
    // modal open state
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = (): void => {
        setOpen(prevState => !prevState);
    };

    return (
        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
                onExitComplete={() => null}
            >
                {open && (
                    <Modal open={open} handleClose={handleToggle}>
                        <SwitchCard
                            checked={checked}
                            loginInput={loginInput}
                            signupInput={signupInput}
                            handleOnChangeLoginInput={handleOnChangeLoginInput}
                            handleOnChangeSignupInput={
                                handleOnChangeSignupInput
                            }
                            handleChecked={handleToggleChecked}
                            handleGoogleLogin={googleLogin}
                        />
                    </Modal>
                )}
            </AnimatePresence>
            <Header handleToggleOpen={handleToggle}></Header>
        </>
    );
};

export default HomeContainer;
