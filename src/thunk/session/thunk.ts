import { firebaseError } from "@/lib/firebaseError";
import { errorSet } from "@/store/error/actions";
import { IError, IFirebaseError } from "@/store/error/models";
import { hideAuthLoading, showAuthLoading } from "@/store/loading/actions";
import { sessionStatus } from "@/store/session/action";
import { onAuthStateChanged } from "firebase/auth";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { auth } from "../../../firebase/firebase";
import { RootState } from "../../store/index";

// auth observer

export const thunkAuthObserver =
    (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
        // show loading bar
        dispatch(showLoading());
        dispatch(showAuthLoading());
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(sessionStatus({ token: user.uid, status: true }));
                    setTimeout(() => {
                        dispatch(hideAuthLoading());
                    }, 1000);
                } else {
                    setTimeout(() => {
                        dispatch(hideAuthLoading());
                    }, 1000);
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
        }
    };

export default thunkAuthObserver;
