import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Select.module.scss';

interface SelectProps {
  options: Array<string>;
  placeholder?: string;
}

const Select: React.VFC<SelectProps> = ({ options, placeholder }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState('');
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
    <>
      <div className={styles.select} onClick={handleToggleOpen}>
        {selected ? (
          <div className={styles.selected}>{selected}</div>
        ) : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
      </div>
      {open && (
        <motion.div variants={dropIn} initial="hidden" animate="visible" className={styles.options}>
          {options.map((item, i) => {
            return (
              <div className={styles.optionsItem} key={i.toString()}>
                <div
                  className={styles.optionsItem}
                  onClick={() => {
                    setSelected(item);
                    handleToggleOpen();
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Select;
