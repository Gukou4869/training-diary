import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/index';
import HomeView from './Home.View';

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
    console.log(
        '🚀 ~ file: Home.Container.tsx ~ line 27 ~ loginInput',
        loginInput,
    );
    //signup input params
    const [signupInput, setSignupInput] = useState<SignupInputParams>({
        email: '',
        password: '',
        confirmed: '',
    });
    console.log(
        '🚀 ~ file: Home.Container.tsx ~ line 32 ~ signupInput',
        signupInput,
    );
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

    return (
        <HomeView
            checked={checked}
            loginInput={loginInput}
            signupInput={signupInput}
            handleOnChangeLoginInput={handleOnChangeLoginInput}
            handleOnChangeSignupInput={handleOnChangeSignupInput}
            handleToggleChecked={handleToggleChecked}
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
