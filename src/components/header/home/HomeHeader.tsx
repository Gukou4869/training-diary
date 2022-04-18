import * as React from "react";
import Navbar from "../../navbar/Navbar";
import styles from "./HomeHeader.module.scss";

interface HomeHeaderProps {
    handleToggleOpen?: () => void;
}

const HomeHeader: React.VFC<HomeHeaderProps> = ({ handleToggleOpen }) => (
    <div className={styles["tralog-header"]}>
        <Navbar handleToggleOpen={handleToggleOpen} />
    </div>
);

export default HomeHeader;
