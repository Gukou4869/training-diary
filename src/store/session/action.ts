import * as Models from "./models";

// login and update status
export function sessionStatus(session: Models.ISession): Models.ISessionStatusAction {
    return {
        type: Models.SessionActionTypes.SESSION_STATUS,
        payload: session,
    };
}

// logout
export function sessionLogout(): Models.ISessionLogoutAction {
    return {
        type: Models.SessionActionTypes.SESSION_LOG_OUT,
        payload: Models.LogoutSession,
    };
}

// password reset
export function passwordResetSuccess(success: boolean): Models.ISessionPasswordResetAction {
    return {
        type: Models.SessionActionTypes.SESSION_PASSWORD_RESET,
        payload: { success },
    };
}

// password request
export function passwordRequestSuccess(success: boolean): Models.ISessionPasswordRequestAction {
    return {
        type: Models.SessionActionTypes.SESSION_PASSWORD_REQUEST,
        payload: { success },
    };
}
