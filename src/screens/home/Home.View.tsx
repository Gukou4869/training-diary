import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IError } from '@/store/error/models';
import googleLogin from '@/services/auth/GoogleLogin';
import SwitchCard from '@/components/switch/card/SwitchCard';
import Modal from '@/components/modal/Modal';
import Header from '@/components/header/Header';
import { LoginInputParams, SignupInputParams } from './Home.Interface';
import styles from './Home.module.scss';

interface HomeContainerProps {
  error: IError;
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
  handleLogin: () => void;
  handleResetError: () => void;
  handleSignup: () => void;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  checked,
  error,
  loginInput,
  signupInput,
  handleOnChangeLoginInput,
  handleOnChangeSignupInput,
  handleToggleChecked,
  handleLogin,
  handleResetError,
  handleSignup,
}) => {
  // modal open state
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      <div className={styles.home} />
      <Header handleToggleOpen={handleToggle} />
      <AnimatePresence>
        {open && (
          <Modal open={open} handleClose={handleToggle}>
            <SwitchCard
              error={error}
              checked={checked}
              loginInput={loginInput}
              signupInput={signupInput}
              handleOnChangeLoginInput={handleOnChangeLoginInput}
              handleOnChangeSignupInput={handleOnChangeSignupInput}
              handleChecked={handleToggleChecked}
              handleGoogleLogin={googleLogin}
              handleLogin={handleLogin}
              handleResetError={handleResetError}
              handleSignup={handleSignup}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeContainer;
