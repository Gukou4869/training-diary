import * as React from 'react';
import ActionButton from '../button/action/ActionButton';
import styles from './Header.module.scss';

interface HeaderProps {
    handleToggleOpen?: () => void;
}

const Header: React.VFC<HeaderProps> = ({ handleToggleOpen }) => {
    return (
        <div className={styles['tralog-header']}>
            <div className={styles['tralog-header__title']}>{'トレログ'}</div>
            <div className={styles['tralog-header__login']}>
                <ActionButton
                    label="ログイン"
                    backgroundColor="#000"
                    color="#fff"
                    onClick={handleToggleOpen}
                />
            </div>
        </div>
    );
};

export default Header;
