import * as React from "react";
import styles from "./Column.module.scss";

interface ColumnProps {
    xl?: 12 | 10 | 8 | 6 | 4 | 3 | 2 | null;
    lg?: 12 | 10 | 8 | 6 | 4 | 3 | 2 | null;
    md?: 12 | 10 | 8 | 6 | 4 | 3 | 2 | null;
    sm?: 12 | 10 | 8 | 6 | 4 | 3 | 2 | null;
    xs?: 12 | 10 | 8 | 6 | 4 | 3 | 2 | null;
}

const Column: React.FC<ColumnProps> = ({ xl, lg, md, sm, xs, children }) => (
    <div
        className={`${styles.col} ${xl ? styles[`col-xl-${xl}`] : ""} ${
            lg ? styles[`col-lg-${lg}`] : ""
        } ${md ? styles[`col-md-${md}`] : ""} ${sm ? styles[`col-sm-${sm}`] : ""} ${
            xs ? styles[`col-${xs}`] : ""
        }`}
    >
        {children}
    </div>
);

Column.defaultProps = {
    xl: null,
    lg: null,
    md: null,
    sm: null,
    xs: null,
};

export default Column;
