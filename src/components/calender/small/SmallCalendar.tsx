import {
    getLastMonthDateClass,
    getSelectedDayClass,
    getTodayClass,
    getYearMonth,
    WeekGrid,
} from "@/lib/date/dateUtils";
import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import styles from "./SmallCalendar.module.scss";

interface SmallCalendarProps {
    currentDayIdx: number;
    currentMonthIdx: number;
    month: Array<WeekGrid>;
    selectedDay: number;
    handleMoveToNextMonth: () => void;
    handleMoveToPrevMonth: () => void;
    handleSetDay: (day: Dayjs, monthIdx: number) => void;
}

interface DeviceSize {
    width: number;
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
    const [deviceWidth, setDeviceWidth] = useState(0);
    const [windowDimensions, setWindowDimensions] = useState(false);

    const getWindowDimensions = (): DeviceSize => {
        const { innerWidth: width } = window;
        return {
            width,
        };
    };

    useEffect(() => {
        const onResize = (): void => {
            const currentWidth = getWindowDimensions();
            setWindowDimensions(currentWidth.width >= 600);
            setDeviceWidth(currentWidth.width - 100);
        };
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return (
        <div className={styles.smallCalendar}>
            <header className={styles.smallCalendar__header}>
                <p className={styles.smallCalendar__header__text}>
                    {getYearMonth(currentMonthIdx)}
                </p>
                <div className={styles.smallCalendar__header__arrow}>
                    <div
                        className={styles.smallCalendar__header__arrow__cursor}
                        onClick={handleMoveToPrevMonth}
                        onKeyPress={handleMoveToPrevMonth}
                        role="button"
                        tabIndex={-1}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div
                        className={styles.smallCalendar__header__arrow__cursor}
                        onClick={handleMoveToNextMonth}
                        onKeyPress={handleMoveToNextMonth}
                        role="button"
                        tabIndex={0}
                    >
                        <MdKeyboardArrowRight />
                    </div>
                </div>
            </header>
            <div
                className={styles.smallCalendar__body}
                style={!windowDimensions ? { height: deviceWidth } : null}
            >
                {month[0].map((day: Dayjs, i: number) => (
                    <span key={i.toString()} className={styles.smallCalendar__body__date}>
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {month.map((row: Array<Dayjs>, i: number) => (
                    <React.Fragment key={i.toString()}>
                        {row.map((day: Dayjs, idx: number) => (
                            <button
                                type="button"
                                key={idx.toString()}
                                value={day.format("D")}
                                className={`${styles.smallCalendar__body__content} ${
                                    styles[getTodayClass(day, currentDayIdx)]
                                } ${styles[getLastMonthDateClass(day, currentMonthIdx)]} ${
                                    styles[getSelectedDayClass(day, selectedDay, currentMonthIdx)]
                                }`}
                                onClick={() => handleSetDay(day, currentMonthIdx)}
                            >
                                <span>{day.format("D")}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SmallCalendar;
