import FullCalendar from "@/components/calender/full/FullCalendar";
import CreateLogCard from "@/components/card/createLog/CreateLogCard";
import CalandarHeader from "@/components/header/calendar/CalendarHeader";
import Modal from "@/components/modal/Modal";
import Sidebar from "@/components/sidebar/Sidebar";
import { createNewEventsArr, getDate, getMonth, thisMonth, today } from "@/lib/date/dateUtils";
import { IEvents, Training } from "@/lib/training/Training";
import { DaySet, MonthSet } from "@/store/date/actions";
import { ICalendarDateState } from "@/store/date/models";
import { sessionStatus } from "@/store/session/action";
import { RootState } from "@/store/store.d";
import styles from "@/styles/Dashboard.module.scss";
import { thunkLogout } from "@/thunk/auth/thunk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard: React.FC = () => {
    // router
    const router = useRouter();
    // calendar store
    const calendar: ICalendarDateState = useSelector((store: RootState) => store.calenderDate);
    // session store
    const status: boolean = useSelector((store: RootState) => store.session.status);
    const date = getDate(calendar.month);
    // dispatch
    const dispatch = useDispatch();

    // current Month Arr
    const [currentMonth, setCurrentMonth] = useState(getMonth(null));
    // selected Day
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    // open create modal
    const [open, setOpen] = useState(false);
    // training part
    const [part, setPart] = useState<Training>("sholder");
    // training menu
    const [menu, setMenu] = useState<number | null>(null);
    // training weight
    const [weight, setWeight] = useState<string | null>(null);
    // training reps
    const [reps, setReps] = useState<string | null>(null);
    // calendar events object
    const [events, setEvents] = useState<Array<null | IEvents>>([]);

    // auth routing
    useEffect(() => {
        if (localStorage.getItem("status") && !status) {
            dispatch(sessionStatus({ token: "", status: true }));
        } else if (!status) {
            router.replace("/");
        }
    }, [status, dispatch, router]);

    useEffect(() => {
        const events = localStorage.getItem("events");
        setEvents(JSON.parse(events)[date]);
        if (!events) {
            const result = createNewEventsArr();
            localStorage.setItem(
                "events",
                JSON.stringify({
                    [date]: result,
                }),
            );
        }
        if (events) {
            const result = createNewEventsArr();
            const newEvents = Object.assign(JSON.parse(events), {
                [date]: result,
            });
            localStorage.setItem("events", JSON.stringify(newEvents));
        }
    }, [date]);

    // set current month Arr
    useEffect(() => {
        setCurrentMonth(getMonth(calendar.month - 1));
    }, [calendar.month]);

    const handleReset = (): void => {
        dispatch(MonthSet(thisMonth));
        dispatch(DaySet(today));
        setSelectedDay(null);
    };

    const handleMoveToPrevMonth = (): void => {
        dispatch(MonthSet(calendar.month - 1));
    };

    const handleMoveToNextMonth = (): void => {
        dispatch(MonthSet(calendar.month + 1));
    };

    const handleLogout = (): void => {
        dispatch(thunkLogout());
    };

    const handleToggleOpen = (): void => {
        setOpen((prevState) => !prevState);
    };

    const handleSetTrainingPart = (part: Training): void => {
        setPart(part);
    };

    const handleSetMenu = (menuIdx: number): void => {
        setMenu(menuIdx);
    };

    const handleSetWeight = (value: string): void => {
        setWeight(value);
    };

    const handleSetReps = (value: string): void => {
        setReps(value);
    };

    const handleSetDay = (day: any, monthIdx: number): void => {
        setSelectedDay(Number(day.format("D")));
        if (day.format("M") !== monthIdx) {
            if (day.format("M") < monthIdx) {
                handleMoveToPrevMonth();
            } else if (day.format("M") > monthIdx) {
                handleMoveToNextMonth();
            }
        }
        if (selectedDay === Number(day.format("D"))) {
            handleToggleOpen();
        }
    };

    const onSubmit = (): void => {
        const newEvents: IEvents = {
            part,
            menu,
            weight,
            reps,
            day: selectedDay,
            id: Date.now(),
        };
        const newObj: Array<null | IEvents> = events.map((item, index) => {
            if (index === newEvents.day - 1) {
                if (item && Array.isArray(item)) {
                    item.push(newEvents);
                    return item;
                }
                return newEvents;
            }
            return item;
        });
        setEvents(newObj);
        const storageEvents = JSON.parse(localStorage.getItem("events"));
        storageEvents[date] = newObj;
        localStorage.setItem("events", JSON.stringify(storageEvents));
        handleToggleOpen();
    };
    return (
        <div className={styles.dashboard}>
            <Modal disableBackdrop open={open} handleClose={handleToggleOpen}>
                <CreateLogCard
                    part={part}
                    menu={menu}
                    weight={weight}
                    reps={reps}
                    currentMonth={calendar.month}
                    selectedDay={selectedDay}
                    handleSetWeight={handleSetWeight}
                    handleSetReps={handleSetReps}
                    handleSetTrainingPart={handleSetTrainingPart}
                    handleSetMenu={handleSetMenu}
                    onSubmit={onSubmit}
                />
            </Modal>
            <CalandarHeader
                currentMonthIdx={calendar.month}
                handleMoveToPrevMonth={handleMoveToPrevMonth}
                handleMoveToNextMonth={handleMoveToNextMonth}
                handleLogout={handleLogout}
                handleReset={handleReset}
            />
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <Sidebar
                        currentDayIdx={calendar.day}
                        currentMonthIdx={calendar.month}
                        month={currentMonth}
                        selectedDay={selectedDay}
                        handleMoveToNextMonth={handleMoveToNextMonth}
                        handleMoveToPrevMonth={handleMoveToPrevMonth}
                        handleToggleOpen={handleToggleOpen}
                        handleSetDay={handleSetDay}
                    />
                </div>
                <div className={styles.calendar}>
                    <FullCalendar
                        events={events}
                        month={currentMonth}
                        currentDayIdx={calendar.day}
                        currentMonthIdx={calendar.month}
                        selectedDay={selectedDay}
                        handleMoveToPrevMonth={handleMoveToPrevMonth}
                        handleMoveToNextMonth={handleMoveToNextMonth}
                        handleSetDay={handleSetDay}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
