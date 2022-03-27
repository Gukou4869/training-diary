//action types
export enum SessionActionTypes {
  SESSION_STATUS = 'session/status',
  SESSION_LOG_OUT = 'session/logout',
  SESSION_PASSWORD_RESET = 'session/password-reset',
  SESSION_PASSWORD_REQUEST = 'session/password-request',
}

//data
export interface ISession {
  token: string;
  status: boolean;
}

export interface ILoginParams {
  mall_shop_manager_user: {
    email: string;
    password: string;
  };
}
export interface ILoginResponse {
  email: string;
  name: string;
  jti: string;
}

//password reset
export interface IPasswordResetSuccess {
  success: boolean;
}

export interface IPasswordReset {
  mall_admin_managers: {
    reset_password_token: string;
    password: string;
    password_confirmation: string;
  };
}

//password request
export interface IPasswordRequestSuccess {
  success: boolean;
}

export interface IPasswordRequest {
  mall_shop_manager_user: {
    email: string;
  };
}

//action
export interface ISessionStatusAction {
  type: SessionActionTypes.SESSION_STATUS;
  payload: ISession;
}

export interface ISessionLogoutAction {
  type: SessionActionTypes.SESSION_LOG_OUT;
  payload: ISession;
}

export interface ISessionPasswordResetAction {
  type: SessionActionTypes.SESSION_PASSWORD_RESET;
  payload: IPasswordResetSuccess;
}

export interface ISessionPasswordRequestAction {
  type: SessionActionTypes.SESSION_PASSWORD_REQUEST;
  payload: IPasswordRequestSuccess;
}

//state
export interface ISessionState {
  token: string;
  status: boolean;
  success: boolean;
}
// session storage for initial session state
const status = false;
const token = '';

export const initialSessionState: ISessionState = {
  token,
  status,
  success: false,
};

export const LogoutSession: ISession = {
  token: '',
  status: false,
};
