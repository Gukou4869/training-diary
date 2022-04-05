import React from 'react';
import { getTodayClass, getLastMonthDateClass, getSelectedDayClass } from '@/lib/date/dateUtils';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FullCalendar.module.scss';

interface FullCalendarProps {
  month?: Array<any>;
  currentDayIdx?: number;
  currentMonthIdx?: number;
  selectedDay: number;
  handleMoveToPrevMonth: () => void;
  handleMoveToNextMonth: () => void;
}

const FullCalendar: React.VFC<FullCalendarProps> = ({
  month,
  currentDayIdx,
  currentMonthIdx,
  selectedDay,
  handleMoveToPrevMonth,
  handleMoveToNextMonth,
}) => {
  const handleOnWheel = (e: React.WheelEvent): void => {
    if (e.deltaY > 0) {
      handleMoveToNextMonth();
    } else {
      handleMoveToPrevMonth();
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={currentMonthIdx}
        exit={{
          opacity: 0,
          x: -10,
          transition: {
            duration: 0.1,
          },
        }}
        initial={{
          opacity: 1,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.1,
            ease: 'easeOut',
          },
        }}
      >
        <div className={styles.fullCalendar}>
          {month.map((week, weekIdx) => {
            return (
              <React.Fragment key={weekIdx}>
                {week.map((day: any, dayIdx: number) => {
                  return (
                    <div
                      className={styles.day}
                      key={dayIdx.toString()}
                      onWheel={handleOnWheel}
                      onClick={() => {
                        console.log(day);
                      }}
                    >
                      <header className={styles['day__header']}>
                        {weekIdx === 0 && (
                          <p className={styles['day__weekday']}>
                            {day.format('ddd').toUpperCase()}
                          </p>
                        )}
                        <p
                          className={`${styles['day__date']} ${
                            styles[getTodayClass(day, currentDayIdx)]
                          } ${styles[getLastMonthDateClass(day, currentMonthIdx)]} ${
                            styles[getSelectedDayClass(day, selectedDay, currentMonthIdx)]
                          }`}
                        >
                          {day.format('D')}
                        </p>
                      </header>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default FullCalendar;
