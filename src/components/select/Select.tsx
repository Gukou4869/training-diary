import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Select.module.scss';

interface SelectProps {
  options: Array<string>;
}

const Select: React.VFC<SelectProps> = ({ options }) => {
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
      width: '300px',
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <div className={styles.select} onClick={handleToggleOpen}></div>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            className={styles.options}
          >
            {options.map((item, i) => {
              return (
                <div className="" key={i.toString()}>
                  {item}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Select;
