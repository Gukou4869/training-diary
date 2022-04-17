import * as Models from "./models";

export default function trainingLogReducer(
    state = Models.initialLogState,
    action: Models.ILogListSetAction | Models.ILogItemSetAction,
): Models.ILogState {
    switch (action.type) {
        case Models.LogActionTypes.LOG_LIST_SET:
            return {
                ...state,
                ...action.payload,
            };
        case Models.LogActionTypes.LOG_ITEM_SET:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
