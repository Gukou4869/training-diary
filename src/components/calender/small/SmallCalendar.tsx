import React from 'react';
import {
    getYearMonth,
    getTodayClass,
    getLastMonthDateClass,
    getSelectedDayClass,
} from '@/lib/date/dateUtils';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './SmallCalendar.module.scss';

interface SmallCalendarProps {
    currentDayIdx: number;
    currentMonthIdx: number;
    month: Array<any>;
    selectedDay: number;
    handleMoveToNextMonth: () => void;
    handleMoveToPrevMonth: () => void;
    handleSetDay: (day: any, monthIdx: number) => void;
}

const SmallCalendar: React.VFC<SmallCalendarProps> = ({
    currentDayIdx,
    currentMonthIdx,
    month,
    selectedDay,
    handleMoveToNextMonth,
    handleMoveToPrevMonth,
    handleSetDay,
}) => {
    return (
        <div className={styles.smallCalendar}>
            <header className={styles['smallCalendar__header']}>
                <p className={styles['smallCalendar__header__text']}>
                    {getYearMonth(currentMonthIdx)}
                </p>
                <div className={styles['smallCalendar__header__arrow']}>
                    <div
                        className={styles['smallCalendar__header__arrow__cursor']}
                        onClick={handleMoveToPrevMonth}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div
                        className={styles['smallCalendar__header__arrow__cursor']}
                        onClick={handleMoveToNextMonth}
                    >
                        <MdKeyboardArrowRight />
                    </div>
                </div>
            </header>
            <div className={styles['smallCalendar__body']}>
                {month[0].map((day: any, i: number) => {
                    return (
                        <span key={i.toString()} className={styles['smallCalendar__body__date']}>
                            {day.format('dd').charAt(0)}
                        </span>
                    );
                })}
                {month.map((row: Array<any>, i: number) => {
                    return (
                        <React.Fragment key={i.toString()}>
                            {row.map((day: any, idx: number) => {
                                return (
                                    <button
                                        key={idx.toString()}
                                        value={day.format('D')}
                                        className={`${styles['smallCalendar__body__content']} ${
                                            styles[getTodayClass(day, currentDayIdx)]
                                        } ${styles[getLastMonthDateClass(day, currentMonthIdx)]} ${
                                            styles[
                                                getSelectedDayClass(
                                                    day,
                                                    selectedDay,
                                                    currentMonthIdx,
                                                )
                                            ]
                                        }`}
                                        onClick={() => handleSetDay(day, currentMonthIdx)}
                                    >
                                        <span>{day.format('D')}</span>
                                    </button>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default SmallCalendar;
