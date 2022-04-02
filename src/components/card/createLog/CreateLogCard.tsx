import React from 'react';
import { useState } from 'react';
import { trainingType, getTraining } from '@/lib/training/Training';
import ActionButton from '@/components/button/action/ActionButton';
import CategoryTag from '@/components/tag/category/CategoryTag';
import FlexBox from '@/components/flexbox/Flexbox';
import Select from '@/components/select/Select';
import styles from './CreateLogCard.module.scss';

interface CreateLogCardProps {}

const CreateLogCard: React.VFC<CreateLogCardProps> = () => {
  const [training, setTraining] = useState('');
  return (
    <div className={styles.createLog}>
      <FlexBox justify="start">
        <div className={styles.header}>💪🏼 ログを残す</div>
      </FlexBox>
      <div className={styles.tag}>
        {trainingType.map((item: string, index: number) => {
          return (
            <div className={styles.tagItem} key={index.toString()}>
              <CategoryTag
                type={item}
                onClick={(type: string) => {
                  setTraining(type);
                }}
              />
            </div>
          );
        })}
      </div>
      <FlexBox>
        <div className={styles.select}>
          <Select options={getTraining(training)} placeholder={'部位を選択してください'} />
        </div>
      </FlexBox>
      <FlexBox>
        <div className={styles.select}>
          <ActionButton label="登録する" />
        </div>
      </FlexBox>
    </div>
  );
};

export default CreateLogCard;
