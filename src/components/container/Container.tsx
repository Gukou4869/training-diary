import * as React from 'react';
import styles from './Container.module.scss';
interface ContainerProps {}

const Container: React.FC<ContainerProps> = props => {
    const { children } = props;
    return <div className={styles.container}>{children}</div>;
};

export default Container;
