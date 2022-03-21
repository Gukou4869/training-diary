import React from 'react';
import FlexBox from '@/components/flexbox/Flexbox';
import styles from './CreateLogCard.module.scss';

interface CreateLogCardProps {}

const CreateLogCard: React.VFC<CreateLogCardProps> = () => {
  return (
    <div className={styles.createLog}>
      <FlexBox justify="start">
        <div className={styles.header}>💪🏼 ログを残す</div>
      </FlexBox>
    </div>
  );
};

export default CreateLogCard;
