import * as Models from "./models";

export function showAuthLoading(): Models.ILoadingAuthorizationShowAction {
    return {
        type: Models.LoadingActionTypes.LOADING_AUTHORIZATION_SHOW,
        payload: { authLoading: true },
    };
}

export function hideAuthLoading(): Models.ILoadingAuthorizationHideAction {
    return {
        type: Models.LoadingActionTypes.LOADING_AUTHORIZATION_HIDE,
        payload: { authLoading: false },
    };
}
