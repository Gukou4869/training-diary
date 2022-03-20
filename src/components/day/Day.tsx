import React from 'react';
import styles from './Day.module.scss';
import 'dayjs/locale/zh-cn'; // import locale
import dayjs from 'dayjs';
interface DayProps {
  day: any;
  rowIdx: number;
}

export const Day: React.VFC<DayProps> = ({ day, rowIdx }) => {
  const dayJS = dayjs as any;
  const getCurrentDayClass = (): string => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'selected' : '';
  };
  return (
    <div className={styles.day}>
      <header className={styles['day__header']}>
        {rowIdx === 0 && <p className={styles['day__weekday']}>{day.format('ddd').toUpperCase()}</p>}
        <p className={`${styles['day__date']} ${styles[getCurrentDayClass()]}`}>{day.format('DD')}</p>
      </header>
    </div>
  );
};

export default Day;
