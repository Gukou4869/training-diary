import * as Models from './models';

export function adminInfoReducer(
  state = Models.initialAdminInfoState,
  action: Models.IAdminInfoSetAction,
): Models.IAdminInfo {
  switch (action.type) {
    case Models.AdminInfoActionTypes.ADMIN_INFO_SET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
