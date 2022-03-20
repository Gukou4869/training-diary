import * as Models from './models';

export function calendarDateReducer(
  state = Models.initialDate,
  action: Models.IMonthSetAction | Models.IDaySetAction,
): Models.ICalendarDate {
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
