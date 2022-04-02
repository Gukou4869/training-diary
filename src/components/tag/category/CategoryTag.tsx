import React from 'react';
import styles from './CategoryTag.module.scss';

interface CategoryTagProps {
  type: string;
  onClick: (type: string) => void;
  //type: 'sholder' | 'chest' | 'ab' | 'back' | 'arm' | 'legs';
}

const CategoryTag: React.VFC<CategoryTagProps> = ({ type, onClick }) => {
  const typeToJP = (text: string): string => {
    switch (text) {
      case 'sholder':
        return '肩';
      case 'chest':
        return '胸';
      case 'ab':
        return '腹';
      case 'back':
        return '背中';
      case 'arm':
        return '腕';
      case 'legs':
        return '足';
    }
  };
  return (
    <div
      className={`${styles.categoryTag} ${styles[type]}`}
      onClick={() => {
        onClick(type);
      }}
    >
      {typeToJP(type)}
    </div>
  );
};

export default CategoryTag;
