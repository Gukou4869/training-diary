//action type
export enum LoadingActionTypes {
    LOADING_AUTHORIZATION_SHOW = 'LOADING_AUTHORIZATION_SET',
    LOADING_AUTHORIZATION_HIDE = 'LOADING_AUTHORIZATION_HIDE_SET',
}

//data
export interface ILoadingAuthorization {
    authLoading: boolean;
}

//action
export interface ILoadingAuthorizationShowAction {
    type: LoadingActionTypes.LOADING_AUTHORIZATION_SHOW;
    payload: ILoadingAuthorization;
}

export interface ILoadingAuthorizationHideAction {
    type: LoadingActionTypes.LOADING_AUTHORIZATION_HIDE;
    payload: ILoadingAuthorization;
}

//state
export const initialLoadingState: ILoadingAuthorization = {
    authLoading: false,
};
