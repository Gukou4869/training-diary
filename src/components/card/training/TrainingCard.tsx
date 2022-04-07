import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ITraining } from '@/lib/training/Training';
import styles from './TrainingCard.module.scss';

interface TrainingCardProps {
    training: ITraining;
}

const TrainingCard: React.VFC<TrainingCardProps> = ({ training }) => {
    return (
        <motion.div
            className={styles.training}
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
            <div className={styles.title}>{training.name}</div>
            <Image src={training.src} width={'150'} height={'150'} className={styles.image} />
        </motion.div>
    );
};

export default TrainingCard;
