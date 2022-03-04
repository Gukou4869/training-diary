import * as React from 'react';
import ActionButton from '../button/action/ActionButton';
import styles from '@/styles/components/Header.module.scss';

interface HeaderProps {}

const Header: React.VFC<HeaderProps> = () => {
    return (
        <div className={styles['tralog-header']}>
            <div className={styles['tralog-header__title']}>{'トレログ'}</div>
            <div className={styles['tralog-header__login']}>
                <ActionButton
                    label="ログイン"
                    backgroundColor="#000"
                    color="#fff"
                />
            </div>
        </div>
    );
};

export default Header;
