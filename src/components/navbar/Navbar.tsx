import * as React from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  handleToggleOpen?: () => void;
}

const Navbar: React.VFC<NavbarProps> = ({ handleToggleOpen }) => (
  <div className={styles['tralog-navbar']}>
    <div className={styles['tralog-navbar__container']}>
      <div className={styles['tralog-header__title']}>TRALOG!</div>
      <div className={styles['tralog-navbar__container__btn-group']}>
        <button type="button" className={styles['tralog-navbar__container__btn-group__btn']} onClick={handleToggleOpen}>
          ログイン
        </button>
        <button type="button" className={styles['tralog-navbar__container__btn-group__btn']} onClick={handleToggleOpen}>
          サインアップ
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;
