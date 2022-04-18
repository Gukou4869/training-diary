import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import Backdrop from "../backdrop/Backdrop";
import styles from "./Modal.module.scss";

interface ModalProps {
    children?: React.ReactElement;
    disableBackdrop?: boolean;
    open?: boolean;
    title?: string;
    handleClose?: () => void;
}

const Modal: React.VFC<ModalProps> = ({ children, disableBackdrop, open, title, handleClose }) => {
    const dropIn = {
        hidden: {
            y: "-15vh",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                stiffness: 100,
            },
        },
        exit: {
            y: "-10vh",
            opacity: 0,
        },
    };
    return (
        <AnimatePresence exitBeforeEnter>
            {open && (
                <Backdrop disabled={disableBackdrop}>
                    <motion.div
                        className={styles.modal}
                        onClick={(event: React.MouseEvent) => {
                            event.stopPropagation();
                        }}
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.modal__title}>{title}</div>
                        <button type="button" className={styles.modal__close} onClick={handleClose}>
                            <div className={styles.modal__close__btn}>
                                <FaTimes />
                            </div>
                        </button>
                        {children}
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;
