import * as Models from "./models";

export default function calendarDateReducer(
    state = Models.initialDate,
    action: Models.IMonthSetAction | Models.IDaySetAction,
): Models.ICalendarDateState {
    switch (action.type) {
        case Models.CalendarActionTypes.CALENDAR_MONTH_SET:
            return {
                ...state,
                ...action.payload,
            };
        case Models.CalendarActionTypes.CALENDAR_DAY_SET:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
