import * as React from 'react';
import { useState } from 'react';
import CreateEventButton from '../button/createEvent/CreateEventButton';
import CreateLogCard from '../card/createLog/CreateLogCard';
import Modal from '../modal/Modal';
import SmallCalendar from '../calender/small/SmallCalendar';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  currentDayIdx: number;
  currentMonthIdx: number;
  month: Array<any>;
  selectedDay: number;
  handleMoveToNextMonth: () => void;
  handleMoveToPrevMonth: () => void;
  handleSetDay: (day: any, monthIdx: number) => void;
}

const Sidebar: React.VFC<SidebarProps> = ({
  currentDayIdx,
  currentMonthIdx,
  month,
  selectedDay,
  handleMoveToNextMonth,
  handleMoveToPrevMonth,
  handleSetDay,
}) => {
  //open create modal
  const [open, setOpen] = useState(false);
  const handleToggleOpen = (): void => {
    setOpen((prevState) => !prevState);
  };
  return (
    <aside className={styles.sidebar}>
      <Modal disableBackdrop={true} open={open} handleClose={handleToggleOpen}>
        <CreateLogCard />
      </Modal>
      <CreateEventButton onClick={handleToggleOpen} />
      <SmallCalendar
        currentDayIdx={currentDayIdx}
        currentMonthIdx={currentMonthIdx}
        month={month}
        selectedDay={selectedDay}
        handleMoveToNextMonth={handleMoveToNextMonth}
        handleMoveToPrevMonth={handleMoveToPrevMonth}
        handleSetDay={handleSetDay}
      />
    </aside>
  );
};

export default Sidebar;
