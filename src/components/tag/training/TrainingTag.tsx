import { getTrainingName, Training } from "@/lib/training/Training";
import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "./TrainingTag.module.scss";

export interface TrainingTagProps {
    part: Training;
    menu: number;
    weight: string;
    reps: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TrainingTag: React.VFC<TrainingTagProps> = ({ part, menu, weight, reps, onClick }) => {
    const name = getTrainingName(part, menu);
    return (
        <div className={`${styles.trainingTag} ${styles[part]}`}>
            <div>{name}</div>
            <div className={styles.info}>
                <div className={styles.weight}>
                    {weight}/{reps}
                </div>
                <button type="button" className={styles.delete} onClick={onClick}>
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default TrainingTag;
