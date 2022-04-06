//action type
export enum CalendarActionTypes {
    CALENDAR_MONTH_SET = 'CALENDAR_MONTH_SET',
    CALENDAR_DAY_SET = 'CALENDAR_DAY_SET',
}

//data

export interface ICalendarMonth {
    month: number;
}

export interface ICalendarDay {
    day: number;
}

export interface IMonthSetAction {
    type: CalendarActionTypes.CALENDAR_MONTH_SET;
    payload: ICalendarMonth;
}

export interface IDaySetAction {
    type: CalendarActionTypes.CALENDAR_DAY_SET;
    payload: ICalendarDay;
}

//state
export interface ICalendarDateState {
    month: number;
    day: number;
}
//initial state
export const initialDate: ICalendarDateState = {
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
};
