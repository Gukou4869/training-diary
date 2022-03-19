import { AnyAction } from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ThunkAction } from 'redux-thunk';
import { errorSet } from '@/store/error/actions';
import { IError, IFirebaseError } from '@/store/error/models';
import { showAuthLoading, hideAuthLoading } from '@/store/loading/actions';
import { firebaseError } from '@/lib/firebaseError';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { RootState } from '../../store/index';

// auth observer

export const thunkAuthObserver = (): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch) => {
    // show loading bar
    dispatch(showLoading());
    dispatch(showAuthLoading());
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //router.push('/dashboard');
        }
      });
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
