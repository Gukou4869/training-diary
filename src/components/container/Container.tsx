import * as React from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactElement;
}

const Container: React.FC<ContainerProps> = ({ children }) => <div className={styles.container}>{children}</div>;

export default Container;
