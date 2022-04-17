import { IEvents } from "@/lib/training/Training";

// action type
export enum LogActionTypes {
    LOG_LIST_SET = "LOG_LIST_SET",
    LOG_ITEM_SET = "LOG_ITEM_SET",
}

// data
export interface ILogList {
    list: Array<IEvents[] | null>;
}

export interface ILogItem {
    item: IEvents[] | null;
}

// action
export interface ILogListSetAction {
    type: LogActionTypes.LOG_LIST_SET;
    payload: ILogList;
}

export interface ILogItemSetAction {
    type: LogActionTypes.LOG_ITEM_SET;
    payload: ILogItem;
}

// state

export interface ILogState {
    list: Array<IEvents[] | null>;
    item: IEvents[] | null;
}
export const initialLogState: ILogState = {
    list: [null],
    item: null,
};
