import * as React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IError } from "@/store/error/models";
import SwitchCard from "@/components/switch/card/SwitchCard";
import Header from "@/components/header/home/HomeHeader";
import { LoginInputParams, SignupInputParams } from "./Home.Interface";
import styles from "./Home.module.scss";

interface HomeContainerProps {
    error: IError;
    checked: boolean;
    loginInput: LoginInputParams;
    signupInput: SignupInputParams;
    handleGoogleAuth: () => void;
    handleOnChangeLoginInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeSignupInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    handleGoogleAuth,
    handleOnChangeLoginInput,
    handleOnChangeSignupInput,
    handleToggleChecked,
    handleLogin,
    handleResetError,
    handleSignup,
}) => (
    <>
        <Header />
        <div className={styles.homeContainer}>
            <h1 className={styles.homeTitle}>
                WORKOUT
                <br />
                WITH ME
            </h1>
            <AnimatePresence>
                <SwitchCard
                    error={error}
                    checked={checked}
                    loginInput={loginInput}
                    signupInput={signupInput}
                    handleGoogleAuth={handleGoogleAuth}
                    handleOnChangeLoginInput={handleOnChangeLoginInput}
                    handleOnChangeSignupInput={handleOnChangeSignupInput}
                    handleChecked={handleToggleChecked}
                    handleLogin={handleLogin}
                    handleResetError={handleResetError}
                    handleSignup={handleSignup}
                />
            </AnimatePresence>
        </div>
    </>
);

export default HomeContainer;
