import * as Models from './models';

export function sessionReducer(
    state = Models.initialSessionState,
    action:
        | Models.ISessionStatusAction
        | Models.ISessionLogoutAction
        | Models.ISessionPasswordRequestAction
        | Models.ISessionPasswordResetAction,
): Models.ISessionState {
    switch (action.type) {
        case Models.SessionActionTypes.SESSION_STATUS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('status', action.payload.status.toString());
            return {
                ...state,
                ...action.payload,
            };
        case Models.SessionActionTypes.SESSION_LOG_OUT:
            localStorage.setItem('token', '');
            localStorage.setItem('token', '');
            return {
                ...state,
                ...action.payload,
            };
        case Models.SessionActionTypes.SESSION_PASSWORD_REQUEST:
            return {
                ...state,
                ...action.payload,
            };
        case Models.SessionActionTypes.SESSION_PASSWORD_RESET:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
