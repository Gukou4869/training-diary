import * as Models from './models';

export function adminInfoSet(info: Models.IAdminInfo): Models.IAdminInfoSetAction {
  return {
    type: Models.AdminInfoActionTypes.ADMIN_INFO_SET,
    payload: {
      ...info,
    },
  };
}
