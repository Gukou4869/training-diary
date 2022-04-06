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
        <motion.div className={styles.training}>
            <div className={styles.title}>{training.name}</div>
            <Image src={training.src} width={'150'} height={'150'} className={styles.image} />
        </motion.div>
    );
};

export default TrainingCard;
