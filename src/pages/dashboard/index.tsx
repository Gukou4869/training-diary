import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store.d';
import { getMonth, thisMonth, today } from '@/lib/date/dateUtils';
import { Training } from '@/lib/training/Training';
import { DaySet, MonthSet } from '@/store/date/actions';
import { ICalendarDateState } from '@/store/date/models';
import { thunkLogout } from '@/thunk/auth/thunk';
import { sessionStatus } from '@/store/session/action';
import CalandarHeader from '@/components/header/calendar/CalendarHeader';
import FullCalendar from '@/components/calender/full/FullCalendar';
import Sidebar from '@/components/sidebar/Sidebar';
import styles from '@/styles/Dashboard.module.scss';
import CreateLogCard from '@/components/card/createLog/CreateLogCard';
import Modal from '@/components/modal/Modal';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    //router
    const router = useRouter();
    //calendar store
    const calendar: ICalendarDateState = useSelector((store: RootState) => store.calenderDate);
    //session store
    const status: boolean = useSelector((store: RootState) => store.session.status);
    //dispatch
    const dispatch = useDispatch();

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

    const handleSetDay = (day: any, monthIdx: number): void => {
        setSelectedDay(Number(day.format('D')));
        if (day.format('M') !== monthIdx) {
            if (day.format('M') < monthIdx) {
                handleMoveToPrevMonth();
            } else if (day.format('M') > monthIdx) {
                handleMoveToNextMonth();
            }
        }
        if (selectedDay === Number(day.format('D'))) {
            handleToggleOpen();
        }
    };

    //auth routing
    useEffect(() => {
        if (localStorage.getItem('status') && !status) {
            dispatch(sessionStatus({ token: '', status: true }));
        } else {
            if (!status) {
                router.replace('/');
            }
        }
    }, [status]);

    //current Month Arr
    const [currentMonth, setCurrentMonth] = useState(getMonth(null));
    //selected Day
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    //open create modal
    const [open, setOpen] = useState(false);
    //training part
    const [part, setPart] = useState<Training>('sholder');
    //training menu
    const [menu, setMenu] = useState<number | null>(null);
    //training weight
    const [weight, setWeight] = useState<string | null>(null);
    //training reps
    const [reps, setReps] = useState<string | null>(null);

    //set current month Arr
    useEffect(() => {
        setCurrentMonth(getMonth(calendar.month - 1));
    }, [calendar.month]);

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

    const onSubmit = (): void => {
        console.log(part, menu, weight, reps);
    };
    return (
        <div className={styles.dashboard}>
            <Modal disableBackdrop={true} open={open} handleClose={handleToggleOpen}>
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
