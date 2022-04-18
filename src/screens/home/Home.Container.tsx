import { errorReset, errorSet } from "@/store/error/actions";
import { IError } from "@/store/error/models";
import { RootState } from "@/store/store.d";
import { thunkGoogleAuth, thunkLogin, thunkSignup } from "@/thunk/auth/thunk";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginInputParams, SignupInputParams } from "./Home.Interface";
import HomeView from "./Home.View";

const HomeContainer: React.FC = () => {
    // router
    const router = useRouter();
    // redux store
    const error: IError = useSelector((state: RootState) => state.error);
    const sessionStatus: boolean = useSelector((state: RootState) => state.session.status);
    // redux actions
    const dispatch = useDispatch();
    const login = (email: string, password: string, checked?: boolean): void => {
        dispatch(thunkLogin(email, password, checked));
    };
    const signup = (email: string, password: string): void => {
        dispatch(thunkSignup(email, password));
    };
    const handleGoogleAuth = (): void => {
        dispatch(thunkGoogleAuth());
    };
    const handleResetError = (): void => {
        dispatch(errorReset());
    };
    const handleSetError = (errors: IError): void => {
        dispatch(errorSet(errors));
    };

    // login input params
    const [loginInput, setLoginInput] = useState<LoginInputParams>({
        email: "",
        password: "",
    });
    // signup input params
    const [signupInput, setSignupInput] = useState<SignupInputParams>({
        email: "",
        password: "",
        confirmed: "",
    });
    // password memorise state
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("password")) {
            setLoginInput({
                ...loginInput,
                password: localStorage.getItem("password"),
            });
            setChecked(true);
        }
    }, []);

    useEffect(() => {
        if (sessionStatus) {
            router.replace("/dashboard");
        }
    }, [sessionStatus]);

    const handleOnChangeLoginInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget;
        const tempParams: LoginInputParams = {
            ...loginInput,
            [name]: value,
        };
        setLoginInput(tempParams);
    };

    const handleOnChangeSignupInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget;
        const tempObj: SignupInputParams = {
            ...signupInput,
            [name]: value,
        };
        setSignupInput(tempObj);
    };

    const handleToggleChecked = (): void => {
        setChecked((prevState: boolean) => !prevState);
    };

    const handleLogin = (): void => {
        login(loginInput.email, loginInput.password, checked);
    };

    const handleSignup = (): void => {
        if (signupInput.password !== signupInput.confirmed) {
            const errorObj: IError = {
                hasError: true,
                errorType: "invalid password/confirmed",
                errorMessage: "パスワードと確認用パスワードが一致しません",
            };
            handleSetError(errorObj);
        } else {
            signup(signupInput.email, signupInput.password);
        }
    };

    return (
        <HomeView
            error={error}
            checked={checked}
            loginInput={loginInput}
            signupInput={signupInput}
            handleGoogleAuth={handleGoogleAuth}
            handleOnChangeLoginInput={handleOnChangeLoginInput}
            handleOnChangeSignupInput={handleOnChangeSignupInput}
            handleToggleChecked={handleToggleChecked}
            handleLogin={handleLogin}
            handleResetError={handleResetError}
            handleSignup={handleSignup}
        />
    );
};

export default HomeContainer;
