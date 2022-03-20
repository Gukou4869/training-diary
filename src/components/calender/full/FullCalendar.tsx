import React from 'react';
import { getCurrentDayClass, getLastMonthDateClass } from '@/lib/date/dateUtils';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FullCalendar.module.scss';

interface FullCalendarProps {
  month?: Array<any>;
  currentDayIdx?: number;
  currentMonthIdx?: number;
}

const FullCalendar: React.VFC<FullCalendarProps> = ({ month, currentDayIdx, currentMonthIdx }) => {
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
                    <div className={styles.day} key={dayIdx.toString()}>
                      <header className={styles['day__header']}>
                        {weekIdx === 0 && (
                          <p className={styles['day__weekday']}>
                            {day.format('ddd').toUpperCase()}
                          </p>
                        )}
                        <p
                          className={`${styles['day__date']} ${
                            styles[getCurrentDayClass(day, currentDayIdx, currentMonthIdx)]
                          } ${styles[getLastMonthDateClass(day, currentMonthIdx)]}`}
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
