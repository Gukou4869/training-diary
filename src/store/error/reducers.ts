import * as Models from "./models";

export default function errorReducer(
    state = Models.initialErrorState,
    action: Models.IErrorSetAction | Models.IErrorResetAction,
): Models.IError {
    switch (action.type) {
        case Models.ErrorActionTypes.ERROR_SET:
            return {
                ...state,
                ...action.payload,
            };
        case Models.ErrorActionTypes.ERROR_RESET:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
