import dayjs from 'dayjs';

// カレンダーグリッドの作成
const getMonth = (month: number = dayjs().month()): Array<any> => {
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

export default getMonth;
