import * as Models from './models';

export function loadingReducer(
    state = Models.initialLoadingState,
    action: Models.ILoadingAuthorizationShowAction | Models.ILoadingAuthorizationHideAction,
): Models.ILoadingAuthorization {
    switch (action.type) {
        case Models.LoadingActionTypes.LOADING_AUTHORIZATION_SHOW:
            return {
                ...state,
                ...action.payload,
            };
        case Models.LoadingActionTypes.LOADING_AUTHORIZATION_HIDE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
