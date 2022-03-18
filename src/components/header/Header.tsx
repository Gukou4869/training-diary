import * as React from 'react';
import Navbar from '../navbar/Navbar';
import Background from '../background/Background';
import MockImage from '../svg/mock/Mock';
import styles from './Header.module.scss';

interface HeaderProps {
  handleToggleOpen?: () => void;
}

const Header: React.VFC<HeaderProps> = ({ handleToggleOpen }) => (
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

export default Header;
