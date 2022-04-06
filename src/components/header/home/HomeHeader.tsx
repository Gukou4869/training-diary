import * as React from 'react';
import Navbar from '../../navbar/Navbar';
import Background from '../../background/Background';
import MockImage from '../../svg/mock/Mock';
import styles from './HomeHeader.module.scss';

interface HomeHeaderProps {
    handleToggleOpen?: () => void;
}

const HomeHeader: React.VFC<HomeHeaderProps> = ({ handleToggleOpen }) => (
    <div className={styles['tralog-header']}>
        <Background />
        <Navbar handleToggleOpen={handleToggleOpen} />
        <div className={styles['tralog-header__container']}>
            <div className={styles['tralog-header__container__description']}>
                WORKOUT
                <br />
                WITH ME
            </div>
            <div className={styles['tralog-header__container__description']}>
                <MockImage />
            </div>
        </div>
    </div>
);

export default HomeHeader;
