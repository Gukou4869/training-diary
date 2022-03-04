import * as React from 'react';
import styles from '@/styles/components/Overlay.module.scss';

interface OverlayProps {
    children?: React.ReactElement;
}

const Overlay: React.VFC<OverlayProps> = ({ children }) => {
    return <div className={styles['tralog-overlay']}>{children}</div>;
};

export default Overlay;
