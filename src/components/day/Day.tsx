import React from 'react';
import styles from './Day.module.scss';
import 'dayjs/locale/zh-cn'; // import locale

interface DayProps {
  day: any;
}

export const Day: React.VFC<DayProps> = ({ day }) => {
  return (
    <div className={styles.day}>
      <header className={styles['day__header']}>
        <p className={styles['day__weekday']}>{day.format('ddd').toUpperCase()}</p>
        <p className={styles['day__date']}>{day.format('DD')}</p>
      </header>
    </div>
  );
};

export default Day;
