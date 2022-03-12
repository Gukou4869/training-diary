import * as React from 'react';
import stlyes from './Row.module.scss';

const Row: React.FC = props => {
    const { children } = props;
    return <div className={stlyes.row}>{children}</div>;
};

export default Row;
