import * as React from 'react';
import styles from './CalendarHeader.module.scss';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface CalandarHeaderProps {
  currentMonth: number;
  setMonth: (month: number) => void;
  setToday: () => void;
}

const CalanderHeader: React.VFC<CalandarHeaderProps> = ({ currentMonth, setMonth, setToday }) => {
  return (
    <header className={styles.calendarHeader}>
      <div className="">画像(仮)</div>
      <h1 className={styles['calendarHeader__title']}>TRALOG</h1>
      <button className={styles['calendarHeader__today']} onClick={setToday}>
        Today
      </button>
      <div className={styles['calendarHeader__arrow']}>
        <div
          className={styles['calendarHeader__arrow__cursor']}
          onClick={() => {
            setMonth(currentMonth - 1);
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div
          className={styles['calendarHeader__arrow__cursor']}
          onClick={() => {
            console.log('fsdfasd');
            setMonth(currentMonth + 1);
          }}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    </header>
  );
};

export default CalanderHeader;
