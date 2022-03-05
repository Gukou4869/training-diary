import * as React from 'react';
import styles from '@/styles/components/Column.module.scss';

interface ColumnProps {
    xl?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
    lg?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
    md?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
    sm?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
    xs?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
}

const Column: React.FC<ColumnProps> = props => {
    const { xl, lg, md, sm, xs, children } = props;
    const setClassName = () => {
        let className = 'col';
        if (xl) className += ` col-xl-${xl}`;
        if (lg) className += ` col-lg-${lg}`;
        if (md) className += ` col-md-${md}`;
        if (sm) className += ` col-sm-${sm}`;
        if (xs) className += ` col-${xs}`;
        return className;
    };

    return (
        <div className={`${styles.col} ${styles[setClassName()]}`}>
            {children}
        </div>
    );
};

export default Column;
