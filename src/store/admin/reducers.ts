import * as Models from './models';

export function adminInfoReducer(
    state = Models.initialAdminInfoState,
    action: Models.IAdminInfoSetAction,
): Models.IAdminInfo {
    switch (action.type) {
        case Models.AdminInfoActionTypes.ADMIN_INFO_SET:
            sessionStorage.setItem(
                'mall_shop_name',
                action.payload.mall_shop_name,
            );
            sessionStorage.setItem(
                'mall_shop_manager_user_name',
                action.payload.mall_shop_manager_user_name,
            );
            sessionStorage.setItem(
                'mall_shop_manager_user_email',
                action.payload.mall_shop_manager_user_email,
            );
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
