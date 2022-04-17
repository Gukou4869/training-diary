import { WeekGrid } from "@/lib/date/dateUtils";
import { Dayjs } from "dayjs";
import * as React from "react";
import CreateEventButton from "../button/createEvent/CreateEventButton";
import SmallCalendar from "../calender/small/SmallCalendar";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
    currentDayIdx: number;
    currentMonthIdx: number;
    month: Array<WeekGrid>;
    selectedDay: number;
    handleMoveToNextMonth: () => void;
    handleMoveToPrevMonth: () => void;
    handleToggleOpen: () => void;
    handleSetDay: (day: Dayjs, monthIdx: number) => void;
}

const Sidebar: React.VFC<SidebarProps> = ({
    currentDayIdx,
    currentMonthIdx,
    month,
    selectedDay,
    handleMoveToNextMonth,
    handleMoveToPrevMonth,
    handleToggleOpen,
    handleSetDay,
}) => (
    <aside className={styles.sidebar}>
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

export default Sidebar;
