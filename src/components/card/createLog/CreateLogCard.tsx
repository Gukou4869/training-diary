import React from 'react';
import { useState } from 'react';
import { trainingType, getTraining, getRep, getWeight, Training } from '@/lib/training/Training';
import ActionButton from '@/components/button/action/ActionButton';
import CategoryTag from '@/components/tag/category/CategoryTag';
import FlexBox from '@/components/flexbox/Flexbox';
import Select from '@/components/select/Select';
import TrainingCard from '../training/TrainingCard';
import styles from './CreateLogCard.module.scss';
import { motion } from 'framer-motion';

interface CreateLogCardProps {
    handleSetMenu?: (menuIdx: number) => void;
    handleSetTrainingPart?: (part: Training) => void;
}

const CreateLogCard: React.VFC<CreateLogCardProps> = ({ handleSetMenu, handleSetTrainingPart }) => {
    const [training, setTraining] = useState('sholder');
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
                <div className={styles.trainingList}>
                    {training &&
                        getTraining(training).map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
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
                                    <TrainingCard training={item} />
                                </motion.div>
                            );
                        })}
                </div>
            </FlexBox>
            <FlexBox>
                <div className={styles.select}>
                    <Select options={getWeight()} placeholder={'重量'} />
                    <span>kg</span>
                </div>
                <div className={styles.select}>
                    <Select options={getRep()} placeholder={'レップ数'} />
                    <span>REP</span>
                </div>
            </FlexBox>
            <FlexBox justify="end">
                <div className={styles.submit}>
                    <ActionButton label="登録" />
                </div>
            </FlexBox>
        </div>
    );
};

export default CreateLogCard;
