import * as Models from "./models";

export function errorSet(error: Models.IError): Models.IErrorSetAction {
    return {
        type: Models.ErrorActionTypes.ERROR_SET,
        payload: error,
    };
}

export function errorReset(): Models.IErrorResetAction {
    return {
        type: Models.ErrorActionTypes.ERROR_RESET,
        payload: {
            hasError: false,
            errorType: "",
            errorMessage: "",
        },
    };
}
