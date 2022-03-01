import * as React from 'react';
import styles from '@/styles/components/Header.module.scss';

interface HeaderProps {}

const Header: React.VFC<HeaderProps> = () => {
    return (
        <div className={styles['tralog-header']}>
            <div className={styles['tralog-header__title']}>{'トレログ'}</div>
            <button className={styles['tralog-header__login']}>ログイン</button>
        </div>
    );
};

export default Header;
