import { getYearMonth } from "@/lib/date/dateUtils";
import * as React from "react";
import {
    MdKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
    MdOutlineSettings,
} from "react-icons/md";
import styles from "./CalendarHeader.module.scss";

interface CalandarHeaderProps {
    currentMonthIdx: number;
    handleMoveToPrevMonth?: () => void;
    handleMoveToNextMonth?: () => void;
    handleLogout: () => void;
    handleReset: () => void;
}

const CalanderHeader: React.VFC<CalandarHeaderProps> = ({
    currentMonthIdx,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleLogout,
    handleReset,
}) => (
    <header className={styles.calendarHeader}>
        <h1 className={styles.calendarHeader__title}>TRALOG</h1>
        <button type="button" className={styles.calendarHeader__today} onClick={handleReset}>
            今日
        </button>
        <div className={styles.calendarHeader__arrow}>
            <div
                className={styles.calendarHeader__arrow__cursor}
                onClick={handleMoveToPrevMonth}
                onKeyPress={handleMoveToPrevMonth}
                role="button"
                tabIndex={0}
            >
                <MdOutlineKeyboardArrowLeft />
            </div>
            <div
                className={styles.calendarHeader__arrow__cursor}
                onClick={handleMoveToNextMonth}
                onKeyPress={handleMoveToNextMonth}
                role="button"
                tabIndex={-1}
            >
                <MdKeyboardArrowRight />
            </div>
        </div>
        <p className={styles.smallCalendar__header__text}>{getYearMonth(currentMonthIdx)}</p>
        <div
            className={styles.calendarHeader__logout}
            onClick={handleLogout}
            onKeyPress={handleLogout}
            role="button"
            tabIndex={-2}
        >
            <MdOutlineSettings />
        </div>
    </header>
);

export default CalanderHeader;
