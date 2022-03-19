import * as React from 'react';
import { useState } from 'react';
import Router from 'next/router';
import Signout from '@/services/auth/Signout';
import getMonth from '@/lib/date/dateUtils';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  console.table(getMonth(0));

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div className="">
      This is a dashboard
      <button
        onClick={() => {
          Signout();
          Router.push('/');
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Dashboard;
