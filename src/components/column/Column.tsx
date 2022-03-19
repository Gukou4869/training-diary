import * as React from 'react';
import styles from './Column.module.scss';

interface ColumnProps {
  xl?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
  lg?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
  md?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
  sm?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
  xs?: 12 | 10 | 8 | 6 | 4 | 3 | 2;
}

const Column: React.FC<ColumnProps> = ({ xl, lg, md, sm, xs, children }) => (
  <div
    className={`${styles.col} ${xl ? styles[`col-xl-${xl}`] : ''} ${lg ? styles[`col-lg-${lg}`] : ''} ${
      md ? styles[`col-md-${md}`] : ''
    } ${sm ? styles[`col-sm-${sm}`] : ''} ${xs ? styles[`col-${xs}`] : ''}`}
  >
    {children}
  </div>
);

export default Column;
