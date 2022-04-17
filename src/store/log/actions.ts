import { IEvents } from "@/lib/training/Training";
import * as Models from "./models";

export function setTrainingLogList(logList: Array<IEvents[] | null>): Models.ILogListSetAction {
    return {
        type: Models.LogActionTypes.LOG_LIST_SET,
        payload: {
            list: logList,
        },
    };
}

export function setTrainingLogItem(logItem: IEvents[] | null): Models.ILogItemSetAction {
    return {
        type: Models.LogActionTypes.LOG_ITEM_SET,
        payload: {
            item: logItem,
        },
    };
}
