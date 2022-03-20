import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import getMonth from '@/lib/date/dateUtils';
import Month from '@/components/month/Month';
import CalandarHeader from '@/components/header/calendar/CalendarHeader';
import Sidebar from '@/components/sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store.d';
import { DaySet, MonthSet } from '@/store/date/actions';
import { ICalendarDateState } from '@/store/date/models';
import styles from '@/styles/Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  //calendar store date
  const calender: ICalendarDateState = useSelector((store: RootState) => store.calenderDate);
  //dispatch
  const dispatch = useDispatch();
  const setMonth = (month: number): void => {
    setShowCalender(false);
    setTimeout(() => {
      //set month
      dispatch(MonthSet(month));
      //set day
      month === new Date().getMonth() + 1
        ? dispatch(DaySet(new Date().getDate()))
        : dispatch(DaySet(1));
      setShowCalender(true);
    }, 1);
  };
  const setToday = (): void => {
    setShowCalender(false);
    setTimeout(() => {
      dispatch(MonthSet(new Date().getMonth() + 1));
      dispatch(DaySet(new Date().getDate()));
      setShowCalender(true);
    }, 1);
  };

  const setDay = (): void => {};

  const [currentMonth, setCurrentMonth] = useState(getMonth(null));
  const [currentDay, setCurrentDay] = useState(null);
  const [showCalender, setShowCalender] = useState(true);
  //set current month
  useEffect(() => {
    setCurrentMonth(getMonth(calender.month - 1));
  }, [calender.month]);

  //set curret day
  useEffect(() => {
    setCurrentDay(calender.day);
  }, [calender.day]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.dashboard}>
        <CalandarHeader currentMonth={calender.month} setMonth={setMonth} setToday={setToday} />
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          {showCalender && (
            <motion.div
              exit={{
                opacity: 0,
                x: -60,
                transition: {
                  duration: 0.2,
                },
              }}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeOut',
                },
              }}
              className={styles.calendar}
            >
              <Month month={currentMonth} currentDay={currentDay} currentMonth={calender.month} />
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;
