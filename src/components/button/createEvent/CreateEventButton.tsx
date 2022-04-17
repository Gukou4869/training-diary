import React from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./CreateEventButton.module.scss";

interface CreateEventButtonProps {
    onClick: () => void;
}

const CreateEventButton: React.VFC<CreateEventButtonProps> = ({ onClick }) => (
    <button type="button" className={styles.createEvent} onClick={onClick}>
        <FiPlus />
        Create
    </button>
);
export default CreateEventButton;
