import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store.d';
import { getMonth, thisMonth, today } from '@/lib/date/dateUtils';
import { DaySet, MonthSet } from '@/store/date/actions';
import { ICalendarDateState } from '@/store/date/models';
import CalandarHeader from '@/components/header/calendar/CalendarHeader';
import FullCalendar from '@/components/calender/full/FullCalendar';
import Sidebar from '@/components/sidebar/Sidebar';
import styles from '@/styles/Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  //calendar store date
  const calendar: ICalendarDateState = useSelector((store: RootState) => store.calenderDate);
  //dispatch
  const dispatch = useDispatch();

  const handleReset = (): void => {
    dispatch(MonthSet(thisMonth));
    dispatch(DaySet(today));
    setSelectedDay(null);
  };

  const handleMoveToPrevMonth = (): void => {
    dispatch(MonthSet(calendar.month - 1));
  };

  const handleMoveToNextMonth = (): void => {
    dispatch(MonthSet(calendar.month + 1));
  };

  const handleSetDay = (day: any, monthIdx: number): void => {
    setSelectedDay(Number(day.format('D')));
    if (day.format('M') !== monthIdx) {
      if (day.format('M') < monthIdx) {
        handleMoveToPrevMonth();
      } else if (day.format('M') > monthIdx) {
        handleMoveToNextMonth();
      }
    }
  };

  //current Month Arr
  const [currentMonth, setCurrentMonth] = useState(getMonth(null));
  //selected Day
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  //set current month Arr
  useEffect(() => {
    setCurrentMonth(getMonth(calendar.month - 1));
  }, [calendar.month]);

  return (
    <div className={styles.dashboard}>
      <CalandarHeader
        currentMonthIdx={calendar.month}
        handleMoveToPrevMonth={handleMoveToPrevMonth}
        handleMoveToNextMonth={handleMoveToNextMonth}
        handleReset={handleReset}
      />
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar
            currentDayIdx={calendar.day}
            currentMonthIdx={calendar.month}
            month={currentMonth}
            selectedDay={selectedDay}
            handleMoveToNextMonth={handleMoveToNextMonth}
            handleMoveToPrevMonth={handleMoveToPrevMonth}
            handleSetDay={handleSetDay}
          />
        </div>
        <div className={styles.calendar}>
          <FullCalendar
            month={currentMonth}
            currentDayIdx={calendar.day}
            currentMonthIdx={calendar.month}
            handleMoveToPrevMonth={handleMoveToPrevMonth}
            handleMoveToNextMonth={handleMoveToNextMonth}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
