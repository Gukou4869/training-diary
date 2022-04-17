import { getTrainingName, Training } from "@/lib/training/Training";
import React from "react";
import styles from "./TrainingTag.module.scss";

export interface TrainingTagProps {
    part: Training;
    menu: number;
    weight: string;
    reps: string;
    onClick: () => void;
}

const TrainingTag: React.VFC<TrainingTagProps> = ({ part, menu, weight, reps, onClick }) => {
    const name = getTrainingName(part, menu);
    return (
        <div
            role="button"
            className={`${styles.trainingTag} ${styles[part]}`}
            onClick={onClick}
            onKeyPress={onClick}
            tabIndex={0}
        >
            <div className="">{name}</div>
            <div className={styles.info}>
                <div className={styles.weight}>{weight}kg</div>
                <div className={styles.reps}>{reps} Reps</div>
            </div>
        </div>
    );
};

export default TrainingTag;
