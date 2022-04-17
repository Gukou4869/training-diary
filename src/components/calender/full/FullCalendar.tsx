import {
    getLastMonthDateClass,
    getSelectedDayClass,
    getTodayClass,
    WeekGrid,
} from "@/lib/date/dateUtils";
import { IEvents } from "@/lib/training/Training";
import { Dayjs } from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./FullCalendar.module.scss";

interface FullCalendarProps {
    events: Array<null | IEvents>;
    month?: Array<WeekGrid>;
    currentDayIdx?: number;
    currentMonthIdx?: number;
    selectedDay: number;
    handleMoveToPrevMonth: () => void;
    handleMoveToNextMonth: () => void;
    handleSetDay: (day: Dayjs, monthIdx: number) => void;
}

const FullCalendar: React.VFC<FullCalendarProps> = ({
    events,
    month,
    currentDayIdx,
    currentMonthIdx,
    selectedDay,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleSetDay,
}) => {
    console.log("🚀 ~ file: FullCalendar.tsx ~ line 34 ~ events", events);
    const handleOnWheel = (e: React.WheelEvent): void => {
        if (e.deltaY > 0) {
            handleMoveToNextMonth();
        } else {
            handleMoveToPrevMonth();
        }
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={currentMonthIdx}
                exit={{
                    opacity: 0,
                    x: -10,
                    transition: {
                        duration: 0.1,
                    },
                }}
                initial={{
                    opacity: 1,
                    x: 50,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.1,
                        ease: "easeOut",
                    },
                }}
            >
                <div className={styles.fullCalendar}>
                    {month.map((week, weekIdx) => (
                        <React.Fragment key={week.toString()}>
                            {week.map((day: Dayjs, dayIdx: number) => (
                                <div
                                    className={styles.day}
                                    key={dayIdx.toString()}
                                    onWheel={handleOnWheel}
                                    onClick={() => handleSetDay(day, currentMonthIdx)}
                                    onKeyPress={() => handleSetDay(day, currentMonthIdx)}
                                    role="button"
                                    tabIndex={dayIdx}
                                >
                                    <header className={styles.day__header}>
                                        {weekIdx === 0 && (
                                            <p className={styles.day__weekday}>
                                                {day.format("ddd").toUpperCase()}
                                            </p>
                                        )}
                                        <p
                                            className={`${styles.day__date} ${
                                                styles[getTodayClass(day, currentDayIdx)]
                                            } ${
                                                styles[getLastMonthDateClass(day, currentMonthIdx)]
                                            } ${
                                                styles[
                                                    getSelectedDayClass(
                                                        day,
                                                        selectedDay,
                                                        currentMonthIdx,
                                                    )
                                                ]
                                            }`}
                                        >
                                            {day.format("D")}
                                        </p>
                                    </header>
                                    {events[Number(day.format("D")) + 1] ? (
                                        <div className="">
                                            {events[Number(day.format("D")) + 1].part}
                                        </div>
                                    ) : (
                                        <div className="">これはテストです</div>
                                    )}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
export default FullCalendar;
