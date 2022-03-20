import * as React from 'react';
import { getYearMonth } from '@/lib/date/dateUtils';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './CalendarHeader.module.scss';

interface CalandarHeaderProps {
  currentMonthIdx: number;
  handleMoveToPrevMonth?: () => void;
  handleMoveToNextMonth?: () => void;
  handleReset: () => void;
}

const CalanderHeader: React.VFC<CalandarHeaderProps> = ({
  currentMonthIdx,
  handleMoveToPrevMonth,
  handleMoveToNextMonth,
  handleReset,
}) => {
  return (
    <header className={styles.calendarHeader}>
      <div className="">画像(仮)</div>
      <h1 className={styles['calendarHeader__title']}>TRALOG</h1>
      <button className={styles['calendarHeader__today']} onClick={handleReset}>
        Today
      </button>
      <div className={styles['calendarHeader__arrow']}>
        <div className={styles['calendarHeader__arrow__cursor']} onClick={handleMoveToPrevMonth}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={styles['calendarHeader__arrow__cursor']} onClick={handleMoveToNextMonth}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <p className={styles['smallCalendar__header__text']}>{getYearMonth(currentMonthIdx)}</p>
    </header>
  );
};

export default CalanderHeader;
