import React from 'react';
import { getYearMonth, getCurrentDayClass, getLastMonthDateClass } from '@/lib/date/dateUtils';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './SmallCalendar.module.scss';

interface SmallCalendarProps {
  month: Array<any>;
  currentDayIdx: number;
  currentMonthIdx: number;
  handleMoveToPrevMonth: () => void;
  handleMoveToNextMonth: () => void;
}

const SmallCalendar: React.VFC<SmallCalendarProps> = ({
  month,
  currentDayIdx,
  currentMonthIdx,
  handleMoveToPrevMonth,
  handleMoveToNextMonth,
}) => {
  return (
    <div className={styles.smallCalendar}>
      <header className={styles['smallCalendar__header']}>
        <p className={styles['smallCalendar__header__text']}>{getYearMonth(currentMonthIdx)}</p>
        <div className={styles['smallCalendar__header__arrow']}>
          <div
            className={styles['smallCalendar__header__arrow__cursor']}
            onClick={handleMoveToPrevMonth}
          >
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div
            className={styles['smallCalendar__header__arrow__cursor']}
            onClick={handleMoveToNextMonth}
          >
            <MdKeyboardArrowRight />
          </div>
        </div>
      </header>
      <div className={styles['smallCalendar__body']}>
        {month[0].map((day: any, i: number) => {
          return (
            <span key={i.toString()} className={styles['smallCalendar__body__date']}>
              {day.format('dd').charAt(0)}
            </span>
          );
        })}
        {month.map((row: Array<any>, i: number) => {
          return (
            <React.Fragment key={i.toString()}>
              {row.map((day: any, idx: number) => {
                return (
                  <button
                    key={idx.toString()}
                    className={`${styles['smallCalendar__body__content']} ${
                      styles[getCurrentDayClass(day, currentDayIdx, currentMonthIdx)]
                    } ${styles[getLastMonthDateClass(day, currentMonthIdx)]}`}
                  >
                    <span>{day.format('D')}</span>
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SmallCalendar;
