import * as Models from './models';

export function MonthSet(month: number): Models.IMonthSetAction {
  return {
    type: Models.CalendarActionTypes.CALENDAR_MONTH_SET,
    payload: {
      month,
    },
  };
}

export function DaySet(day: number): Models.IDaySetAction {
  return {
    type: Models.CalendarActionTypes.CALENDAR_DAY_SET,
    payload: {
      day,
    },
  };
}
