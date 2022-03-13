import * as React from 'react';
import Navbar from '../navbar/Navbar';
import Background from '../background/Background';
import styles from './Header.module.scss';

interface HeaderProps {
    handleToggleOpen?: () => void;
}

const Header: React.VFC<HeaderProps> = ({ handleToggleOpen }) => {
    return (
        <div className={styles['tralog-header']}>
            <Background />
            <Navbar handleToggleOpen={handleToggleOpen} />
            <div className={styles['tralog-header__container']}>
                <div
                    className={styles['tralog-header__container__description']}
                >
                    We help your training!
                </div>
                <div
                    className={styles['tralog-header__container__description']}
                ></div>
            </div>
        </div>
    );
};

export default Header;
