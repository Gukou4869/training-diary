import * as React from "react";
import styles from "./Row.module.scss";

const Row: React.FC = ({ children }) => <div className={styles.row}>{children}</div>;

export default Row;
