import * as React from 'react';
import styles from '@/styles/components/Header.module.scss';

interface OverlayProps {}

const Overlay: React.VFC<OverlayProps> = () => {
    return <div className={styles['tralog-overlay']}></div>;
};

export default Overlay;
