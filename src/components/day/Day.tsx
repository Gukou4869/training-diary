import React from 'react';
import styles from './Day.module.scss';
import 'dayjs/locale/zh-cn'; // import locale

interface DayProps {
  day: any;
}

export const Day: React.VFC<DayProps> = ({ day }) => {
  return <div className={styles.day}>{day.format()}</div>;
};

export default Day;
