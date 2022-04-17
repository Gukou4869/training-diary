// action type
export enum ErrorActionTypes {
    ERROR_SET = "error/set",
    ERROR_RESET = "error/reset",
}

// data

export interface IFirebaseError {
    code: string;
    message: string;
    name: string;
}
export interface IError {
    hasError: boolean;
    errorType: string;
    errorMessage: string;
}

// action
export interface IErrorSetAction {
    type: ErrorActionTypes.ERROR_SET;
    payload: IError;
}

export interface IErrorResetAction {
    type: ErrorActionTypes.ERROR_RESET;
    payload: IError;
}

// initial state
export const initialErrorState: IError = {
    hasError: false,
    errorType: "",
    errorMessage: "",
};
