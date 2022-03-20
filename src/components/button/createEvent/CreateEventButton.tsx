import React from 'react';
import { FiPlus } from 'react-icons/fi';
import styles from './CreateEventButton.module.scss';

interface CreateEventButtonProps {}

const CreateEventButton: React.VFC<CreateEventButtonProps> = () => {
  return (
    <button type="button" className={styles.createEvent}>
      <FiPlus />
      Create
    </button>
  );
};
export default CreateEventButton;
