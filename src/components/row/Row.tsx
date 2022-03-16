import * as React from 'react';
import styles from './Row.module.scss';

const Row: React.FC = props => {
    const { children } = props;
    return <div className="row">{children}</div>;
};

export default Row;
