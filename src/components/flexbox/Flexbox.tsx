import * as React from "react";
import styles from "./Flexbox.module.scss";

interface FlexBoxProps {
    direction?: "row" | "column" | null;
    justify?: "start" | "end" | "center" | "between" | "around" | null;
    align?: "start" | "end" | "center" | "baseline" | "stretch" | null;
}

const FlexBox: React.FC<FlexBoxProps> = ({ direction, justify, align, children }) => (
    <div
        className={`${styles["flex-box"]} ${
            direction ? styles[`flex-box--direction-${direction}`] : ""
        } ${justify ? styles[`flex-box--justify-${justify}`] : ""} ${
            align ? styles[`flex-box--align-${align}`] : ""
        }`}
    >
        {children}
    </div>
);

FlexBox.defaultProps = {
    direction: null,
    justify: null,
    align: null,
};

export default FlexBox;
