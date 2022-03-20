import * as React from 'react';
import styles from './CalendarHeader.module.scss';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface CalandarHeaderProps {}

const CalanderHeader: React.VFC<CalandarHeaderProps> = () => {
  return (
    <header className={styles.calendarHeader}>
      <div className="">画像(仮)</div>
      <h1 className={styles['calendarHeader__title']}>TRALOG</h1>
      <button className={styles['calendarHeader__today']}>Today</button>
      <div className={styles['calendarHeader__arrow']}>
        <div className={styles['calendarHeader__arrow__cursor']}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={styles['calendarHeader__arrow__cursor']}>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </header>
  );
};

export default CalanderHeader;
