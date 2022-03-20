import React from 'react';
import styles from './Day.module.scss';
import 'dayjs/locale/zh-cn'; // import locale
import dayjs from 'dayjs';
interface DayProps {
  day: any;
  rowIdx: number;
  currentDay: number;
  currentMonth: number;
}

export const Day: React.VFC<DayProps> = ({ day, rowIdx, currentDay, currentMonth }) => {
  const getCurrentDayClass = (): string => {
    return Number(day.format('D')) === currentDay && Number(day.format('M')) === currentMonth
      ? 'selected'
      : '';
  };
  const getLastMonthDate = (): string => {
    return Number(day.format('M')) !== currentMonth ? 'day__lastMonth' : '';
  };
  console.log(day.format('M'));
  console.log(new Date().getMonth() + 1);
  //console.log(day.format('M') === new Date().getMonth() + 1);
  return (
    <div className={styles.day}>
      <header className={styles['day__header']}>
        {rowIdx === 0 && (
          <p className={styles['day__weekday']}>{day.format('ddd').toUpperCase()}</p>
        )}
        <p
          className={`${styles['day__date']} ${styles[getCurrentDayClass()]} ${
            styles[getLastMonthDate()]
          }`}
        >
          {day.format('D')}
        </p>
      </header>
    </div>
  );
};

export default Day;
