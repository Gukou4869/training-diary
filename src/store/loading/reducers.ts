import * as Models from "./models";

export default function loadingReducer(
    action: Models.ILoadingAuthorizationShowAction | Models.ILoadingAuthorizationHideAction,
    state = Models.initialLoadingState,
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
