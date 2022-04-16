import * as React from 'react';
import { MdOutlineSettings } from 'react-icons/md';
import { getYearMonth } from '@/lib/date/dateUtils';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './CalendarHeader.module.scss';

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
}) => {
    return (
        <header className={styles.calendarHeader}>
            <h1 className={styles['calendarHeader__title']}>TRALOG</h1>
            <button className={styles['calendarHeader__today']} onClick={handleReset}>
                今日
            </button>
            <div className={styles['calendarHeader__arrow']}>
                <div
                    className={styles['calendarHeader__arrow__cursor']}
                    onClick={handleMoveToPrevMonth}
                >
                    <MdOutlineKeyboardArrowLeft />
                </div>
                <div
                    className={styles['calendarHeader__arrow__cursor']}
                    onClick={handleMoveToNextMonth}
                >
                    <MdKeyboardArrowRight />
                </div>
            </div>
            <p className={styles['smallCalendar__header__text']}>{getYearMonth(currentMonthIdx)}</p>
            <div className={styles['calendarHeader__logout']} onClick={handleLogout}>
                <MdOutlineSettings />
            </div>
        </header>
    );
};

export default CalanderHeader;
