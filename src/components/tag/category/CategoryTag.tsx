import { Training, typeToJP } from "@/lib/training/Training";
import React from "react";
import styles from "./CategoryTag.module.scss";

interface CategoryTagProps {
    type: Training;
    onClick: (type: Training) => void;
}

const CategoryTag: React.VFC<CategoryTagProps> = ({ type, onClick }) => (
    <div
        className={`${styles.categoryTag} ${styles[type]}`}
        onClick={() => {
            onClick(type);
        }}
        onKeyPress={() => {
            onClick(type);
        }}
        role="button"
        tabIndex={0}
    >
        {typeToJP(type)}
    </div>
);

export default CategoryTag;
