import * as React from 'react';
import Router from 'next/router';
import Signout from '@/services/auth/Signout';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
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
