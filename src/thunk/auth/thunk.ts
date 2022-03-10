import { AnyAction } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { RootState } from '../../store/index';
import { ThunkAction } from 'redux-thunk';
import { errorSet } from '@/store/error/actions';
import { sessionStatus } from '@/store/session/action';
import login from '@/services/auth/Login';
import signup from '@/services/auth/Signup';
import { IError, IFirebaseError } from '@/store/error/models';

// session login
// @param email: string
// @param password: stringx
export const thunkLogin =
    (
        email: string,
        password: string,
    ): ThunkAction<void, RootState, null, AnyAction> =>
    async dispatch => {
        // show loading bar
        dispatch(showLoading());
        try {
            await login(email, password);
            //dispatch(sessionStatus({ status: true, token }));
        } catch (e) {
            const error = e as IFirebaseError;
            const errorObj: IError = {
                hasError: true,
                errorType: error.code,
                errorMessage: error.message,
            };
            console.log('🚀 ~ file: thunk.ts ~ line 27 ~ error', error);
            dispatch(errorSet(errorObj));
        } finally {
            //hide loading bar
            dispatch(hideLoading());
        }
    };

//session logout
// @param token: string
export const thunkLogout =
    (token: string): ThunkAction<void, RootState, null, AnyAction> =>
    async dispatch => {
        // show loading bar
        dispatch(showLoading());
        try {
            //await logout(token);
            //dispatch(sessionStatus({ status: false, token: '' }));
        } catch (e) {
            //dispatch(errorSet(axiosError(e)));
        } finally {
            //dispatch(hideLoading());
        }
    };
