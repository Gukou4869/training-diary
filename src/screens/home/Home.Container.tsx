import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/index';
import login from '@/services/auth/Login';
import HomeView from './Home.View';
import signup from '@/services/auth/Signup';

interface HomeContainerProps {
    token: string;
}

export interface LoginInputParams {
    email: string;
    password: string;
}

export interface SignupInputParams {
    email: string;
    password: string;
    confirmed: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ token }) => {
    //login input params
    const [loginInput, setLoginInput] = useState<LoginInputParams>({
        email: '',
        password: '',
    });
    //signup input params
    const [signupInput, setSignupInput] = useState<SignupInputParams>({
        email: '',
        password: '',
        confirmed: '',
    });
    // password memorise state
    const [checked, setChecked] = React.useState(false);

    const handleOnChangeLoginInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.currentTarget;
        const tempParams: LoginInputParams = {
            ...loginInput,
            [name]: value,
        };
        setLoginInput(tempParams);
    };

    const handleOnChangeSignupInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.currentTarget;
        const tempObj: SignupInputParams = {
            ...signupInput,
            [name]: value,
        };
        setSignupInput(tempObj);
    };

    const handleToggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    const handleLogin = () => {
        login(loginInput.email, loginInput.password);
    };

    const handleSignup = () => {
        if (signupInput.password === signupInput.confirmed) {
            signup(signupInput.email, signupInput.password);
        }
    };

    return (
        <HomeView
            checked={checked}
            loginInput={loginInput}
            signupInput={signupInput}
            handleOnChangeLoginInput={handleOnChangeLoginInput}
            handleOnChangeSignupInput={handleOnChangeSignupInput}
            handleToggleChecked={handleToggleChecked}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
        />
    );
};

const MapStateToProps = (store: RootState) => {
    return {
        token: store.session.token,
    };
};
const MapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
    return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(HomeContainer);
