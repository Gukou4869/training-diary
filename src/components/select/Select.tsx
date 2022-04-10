import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Select.module.scss';

interface SelectProps {
    options: Array<string>;
    placeholder?: string;
    selectedValue?: string;
    onSelect?: (value: string) => void;
}

const Select: React.VFC<SelectProps> = ({ options, placeholder, selectedValue, onSelect }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleToggleOpen = (): void => {
        setOpen((prevState) => !prevState);
    };
    const dropIn = {
        hidden: {
            y: '-5vh',
            x: 0,
            opacity: 0,
            width: '0px',
        },
        visible: {
            x: '10px',
            y: '1vh',
            opacity: 1,
            width: '200px',
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <div className={styles.select} onClick={handleToggleOpen}>
            {selectedValue ? (
                <div className={styles.selected}>{selectedValue}</div>
            ) : (
                <div className={styles.placeholder}>{placeholder}</div>
            )}
            {open && (
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    className={styles.options}
                >
                    {options.map((item, i) => {
                        return (
                            <div className={styles.optionsItem} key={i.toString()}>
                                <div
                                    className={styles.optionsItem}
                                    onClick={() => {
                                        onSelect(item);
                                    }}
                                >
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            )}
        </div>
    );
};

export default Select;
