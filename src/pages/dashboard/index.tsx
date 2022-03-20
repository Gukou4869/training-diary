import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import getMonth from '@/lib/date/dateUtils';
import Month from '@/components/month/Month';
import CalandarHeader from '@/components/header/calendar/CalendarHeader';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store.d';
import { MonthSet } from '@/store/date/actions';
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
      dispatch(MonthSet(month));
      setShowCalender(true);
    }, 10);
  };
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
        <CalandarHeader setMonth={setMonth} currentMonth={calender.month} />
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
              },
            }}
          >
            <Month month={currentMonth} currentDay={currentDay} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;
