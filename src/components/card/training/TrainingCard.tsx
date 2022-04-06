import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import benchPress from '../../../assets/benchpress.jpeg';
import styles from './TrainingCard.module.scss';

interface TrainingCardProps {
    title?: string;
}

const TrainingCard: React.VFC<TrainingCardProps> = ({ title }) => {
    return (
        <motion.div className={styles.training}>
            <div className={styles.title}>{title}</div>
            <Image src={benchPress} width={'150'} height={'150'} className={styles.image} />
        </motion.div>
    );
};

export default TrainingCard;
