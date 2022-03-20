//action type
export enum AdminInfoActionTypes {
  ADMIN_INFO_SET = 'ADMIN_INFO_SET',
}

//data
export interface IAdminInfo {
  mall_shop_name: string;
  mall_shop_manager_user_name: string;
  mall_shop_manager_user_email: string;
}

export interface IAdminInfoResponse {
  data: IAdminInfo;
  token: string;
}

export interface IAdminInfoSetAction {
  type: AdminInfoActionTypes.ADMIN_INFO_SET;
  payload: IAdminInfo;
}

//initial state
const mall_shop_name = '';
const mall_shop_manager_user_name = '';
const mall_shop_manager_user_email = '';

export const initialAdminInfoState: IAdminInfo = {
  mall_shop_name,
  mall_shop_manager_user_name,
  mall_shop_manager_user_email,
};
