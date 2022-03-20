import * as React from 'react';
import { useState } from 'react';
import Router from 'next/router';
import Signout from '@/services/auth/Signout';
import getMonth from '@/lib/date/dateUtils';
import Month from '@/components/month/Month';
import CalandarHeader from '@/components/header/calendar/CalendarHeader';
import styles from '@/styles/Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div className={styles.dashboard}>
      <CalandarHeader />
      <Month month={currentMonth} />
    </div>
  );
};

export default Dashboard;

//  This is a dashboard
{
  /* <button
onClick={() => {
  Signout();
  Router.push('/');
}}
>
log out
</button> */
}
