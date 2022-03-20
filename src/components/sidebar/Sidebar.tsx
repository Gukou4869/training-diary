import * as React from 'react';
import CreateEventButton from '../button/createEvent/CreateEventButton';
import SmallCalendar from '../calender/small/SmallCalendar';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  month: Array<any>;
  currentDayIdx: number;
  currentMonthIdx: number;
  handleMoveToPrevMonth: () => void;
  handleMoveToNextMonth: () => void;
}

const Sidebar: React.VFC<SidebarProps> = ({
  month,
  currentDayIdx,
  currentMonthIdx,
  handleMoveToPrevMonth,
  handleMoveToNextMonth,
}) => {
  return (
    <aside className={styles.sidebar}>
      <CreateEventButton />
      <SmallCalendar
        month={month}
        currentDayIdx={currentDayIdx}
        currentMonthIdx={currentMonthIdx}
        handleMoveToPrevMonth={handleMoveToPrevMonth}
        handleMoveToNextMonth={handleMoveToNextMonth}
      />
    </aside>
  );
};

export default Sidebar;
