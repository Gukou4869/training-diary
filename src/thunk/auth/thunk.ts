import { AnyAction } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { RootState } from '../../store/index';
import { ThunkAction } from 'redux-thunk';
import { sessionStatus } from '@/store/session/action';
import login from '@/services/auth/Login';
import signup from '@/services/auth/Signup';

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
            //API完成後元に戻す
            const token = await login(email, password);
            //dispatch(sessionStatus({ status: true, token }));
        } catch (e) {
            // dispatch(errorSet(axiosError(e)));
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
