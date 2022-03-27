import { AnyAction } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ThunkAction } from 'redux-thunk';
import { errorReset, errorSet } from '@/store/error/actions';
import { IError, IFirebaseError } from '@/store/error/models';
import { showAuthLoading, hideAuthLoading } from '@/store/loading/actions';
import { firebaseError } from '@/lib/firebaseError';
import login from '@/services/auth/Login';
import signup from '@/services/auth/Signup';
import { RootState } from '../../store/index';
import { sessionLogout, sessionStatus } from '@/store/session/action';
import signout from '@/services/auth/Signout';

// session login
// @param email: string
// @param password: string
export const thunkLogin = (
  email: string,
  password: string,
  checked?: boolean,
): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch) => {
    // show loading bar
    dispatch(showLoading());
    dispatch(showAuthLoading());
    try {
      // error reset
      dispatch(errorReset());
      await login(email, password);
      dispatch(sessionStatus({ status: true, token: '' }));
      sessionStorage.setItem('status', 'true');
      //checkedであればローカルストレージに記憶、unckeckedであれば削除
      if (checked) {
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('password');
      }
    } catch (e) {
      const error = e as IFirebaseError;
      const errorObj: IError = {
        hasError: true,
        errorType: error.message,
        errorMessage: firebaseError(error.code),
      };
      dispatch(errorSet(errorObj));
    } finally {
      // hide loading bar
      dispatch(hideLoading());
      dispatch(hideAuthLoading());
    }
  };
};

// session signup
// @param email: string
export const thunkSignup = (
  email: string,
  password: string,
): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch) => {
    // show loading bar
    dispatch(showLoading());
    dispatch(showAuthLoading());
    try {
      // error reset
      dispatch(errorReset());
      await signup(email, password);
      sessionStorage.setItem('status', 'true');
      dispatch(sessionStatus({ status: true, token: '' }));
    } catch (e) {
      const error = e as IFirebaseError;
      const errorObj: IError = {
        hasError: true,
        errorType: error.message,
        errorMessage: firebaseError(error.code),
      };
      dispatch(errorSet(errorObj));
    } finally {
      // hide loading bar
      dispatch(hideLoading());
      dispatch(hideAuthLoading());
    }
  };
};

// session logout
// @param token: string
export const thunkLogout = (): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch) => {
    // show loading bar
    dispatch(showLoading());
    try {
      await signout();
      dispatch(sessionLogout());
      localStorage.removeItem('status');
    } catch (e) {
      const error = e as IFirebaseError;
      const errorObj: IError = {
        hasError: true,
        errorType: error.message,
        errorMessage: firebaseError(error.code),
      };
      dispatch(errorSet(errorObj));
    } finally {
      dispatch(hideLoading());
    }
  };
};
