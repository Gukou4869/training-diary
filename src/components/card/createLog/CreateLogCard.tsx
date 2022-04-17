import ActionButton from "@/components/button/action/ActionButton";
import FlexBox from "@/components/flexbox/Flexbox";
import Select from "@/components/select/Select";
import CategoryTag from "@/components/tag/category/CategoryTag";
import { getRep, getTraining, getWeight, Training, trainingType } from "@/lib/training/Training";
import { motion } from "framer-motion";
import React from "react";
import TrainingCard from "../training/TrainingCard";
import styles from "./CreateLogCard.module.scss";

interface CreateLogCardProps {
    currentMonth: number;
    menu: number | null;
    part: Training;
    weight: string | null;
    reps: string | null;
    selectedDay: number;
    handleSetMenu?: (menuIdx: number) => void;
    handleSetWeight: (value: string) => void;
    handleSetReps: (value: string) => void;
    handleSetTrainingPart?: (part: Training) => void;
    onSubmit: () => void;
}

const CreateLogCard: React.VFC<CreateLogCardProps> = ({
    currentMonth,
    part,
    menu,
    weight,
    reps,
    selectedDay,
    handleSetMenu,
    handleSetReps,
    handleSetWeight,
    handleSetTrainingPart,
    onSubmit,
}) => (
    <div className={styles.createLog}>
        <FlexBox justify="start">
            <div className={styles.header}>💪🏼 ログを残す</div>
            <span className={styles.date}>
                {currentMonth}月{selectedDay}日
            </span>
        </FlexBox>
        <div className={styles.tag}>
            {trainingType.map((item: Training, index: number) => (
                <div className={styles.tagItem} key={index.toString()}>
                    <CategoryTag type={item} onClick={handleSetTrainingPart} />
                </div>
            ))}
        </div>
        <FlexBox>
            <div className={styles.trainingList}>
                {part &&
                    getTraining(part).map((item, index) => (
                        <motion.div
                            key={item.name}
                            exit={{
                                opacity: 0,
                                x: 60,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            initial={{
                                opacity: 0,
                                x: 60,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                        >
                            <TrainingCard
                                training={item}
                                menuIdx={index}
                                selected={menu === index}
                                handleSetMenu={handleSetMenu}
                            />
                        </motion.div>
                    ))}
            </div>
        </FlexBox>
        <FlexBox>
            <div className={styles.select}>
                <Select
                    options={getWeight()}
                    placeholder="重量"
                    selectedValue={weight}
                    onSelect={handleSetWeight}
                />
                <span>kg</span>
            </div>
            <div className={styles.select}>
                <Select
                    options={getRep()}
                    placeholder="レップ数"
                    selectedValue={reps}
                    onSelect={handleSetReps}
                />
                <span>REP</span>
            </div>
        </FlexBox>
        <FlexBox justify="end">
            <div className={styles.submit}>
                <ActionButton label="登録" onClick={onSubmit} />
            </div>
        </FlexBox>
    </div>
);

export default CreateLogCard;
