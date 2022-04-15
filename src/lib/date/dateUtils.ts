import dayjs from 'dayjs';

// カレンダーグリッドの作成
export const getMonth = (month: number = dayjs().month()): Array<any> => {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMartix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount += 1;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMartix;
};

export const thisMonth: number = new Date().getMonth() + 1;
export const today: number = new Date().getDate();

export const getYearMonth = (monthIdx: number): string => {
    return `${dayjs(new Date(dayjs().year(), monthIdx - 1)).format('YYYY')}年 ${dayjs(
        new Date(dayjs().year(), monthIdx - 1),
    ).format('M')}月`;
};

export const getDate = (monthIdx: number): string => {
    return `${dayjs(new Date(dayjs().year(), monthIdx - 1)).format('YYYY')}-${dayjs(
        new Date(dayjs().year(), monthIdx - 1),
    ).format('M')}`;
};

export const getTodayClass = (day: any, dayIdx: number): string => {
    return Number(day.format('D')) === dayIdx && Number(day.format('M')) === thisMonth
        ? 'today'
        : '';
};
export const getLastMonthDateClass = (day: any, monthIdx: number): string => {
    return Number(day.format('M')) !== monthIdx ? 'day__lastMonth' : '';
};

export const getSelectedDayClass = (day: any, selected: number, monthIdx: number): string => {
    return selected === Number(day.format('D')) && Number(day.format('M')) === monthIdx
        ? 'selected'
        : '';
};

export const createNewEventsArr = (): Array<null> => {
    let times = 1;
    const result = [];
    while (times <= 31) {
        result.push(null);
        times++;
    }
    return result;
};
