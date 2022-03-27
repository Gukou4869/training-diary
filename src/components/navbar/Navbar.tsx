import * as React from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  handleToggleOpen?: () => void;
}

const Navbar: React.VFC<NavbarProps> = ({ handleToggleOpen }) => (
  <div className={styles['tralog-navbar']}>
    <div className={styles['tralog-navbar__container']}>
      <div className={styles['tralog-header__title']}>TRALOG!</div>
      <button
        type="button"
        className={styles['tralog-navbar__container__btn-group__btn']}
        onClick={handleToggleOpen}
      >
        始めてみる
      </button>
    </div>
  </div>
);

export default Navbar;
