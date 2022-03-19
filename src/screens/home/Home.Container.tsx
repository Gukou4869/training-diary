import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogin, thunkSignup } from '@/thunk/auth/thunk';
import { errorReset, errorSet } from '@/store/error/actions';
import { IError } from '@/store/error/models';
import { RootState } from '@/store/store.d';
import { LoginInputParams, SignupInputParams } from './Home.Interface';
import HomeView from './Home.View';

const HomeContainer: React.FC = () => {
  // reduc store
  const error: IError = useSelector((state: RootState) => {
    return state.error;
  });
  // redux actions
  const dispatch = useDispatch();
  const login = (email: string, password: string): void => {
    dispatch(thunkLogin(email, password));
  };
  const signup = (email: string, password: string): void => {
    dispatch(thunkSignup(email, password));
  };
  const handleResetError = (): void => {
    dispatch(errorReset());
  };
  const handleSetError = (errors: IError): void => {
    dispatch(errorSet(errors));
  };

  // login input params
  const [loginInput, setLoginInput] = useState<LoginInputParams>({
    email: '',
    password: '',
  });
  // signup input params
  const [signupInput, setSignupInput] = useState<SignupInputParams>({
    email: '',
    password: '',
    confirmed: '',
  });
  // password memorise state
  const [checked, setChecked] = React.useState(false);

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
    setChecked((prevState: boolean) => {
      return !prevState;
    });
  };

  const handleLogin = (): void => {
    login(loginInput.email, loginInput.password);
  };

  const handleSignup = (): void => {
    if (signupInput.password !== signupInput.confirmed) {
      const errorObj: IError = {
        hasError: true,
        errorType: 'invalid password/confirmed',
        errorMessage: 'パスワードと確認用パスワードが一致しません',
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
