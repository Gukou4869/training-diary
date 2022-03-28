import React from 'react';
import FlexBox from '@/components/flexbox/Flexbox';
import Select from '@/components/select/Select';
import { trainingType, Training } from '@/lib/training/Training';
import styles from './CreateLogCard.module.scss';
import CategoryTag from '@/components/tag/category/CategoryTag';

interface CreateLogCardProps {}

const CreateLogCard: React.VFC<CreateLogCardProps> = () => {
  return (
    <div className={styles.createLog}>
      <FlexBox justify="start">
        <div className={styles.header}>💪🏼 ログを残す</div>
      </FlexBox>
      <div className={styles.tag}>
        {trainingType.map((item: string, index: number) => {
          return (
            <div className={styles.tagItem} key={index.toString()}>
              <CategoryTag type={item} />
            </div>
          );
        })}
      </div>
      <FlexBox>
        <div className={styles.select}>
          <Select
            options={['肩', '腕', '胸', '背中', '足']}
            placeholder={'部位を選択してください'}
          />
        </div>
      </FlexBox>
    </div>
  );
};

export default CreateLogCard;
