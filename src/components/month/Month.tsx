import React from 'react';
import styles from './Month.module.scss';
import Day from '@/components/day/Day';
interface MonthProps {
  month?: Array<any>;
}

export const Month: React.VFC<MonthProps> = ({ month }) => {
  return (
    <div className={styles.month}>
      {month.map((week, weekIdx) => {
        return (
          <React.Fragment key={weekIdx}>
            {week.map((day: any, dayIdx: number) => {
              return <Day day={day} key={dayIdx} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
