import * as React from 'react';
import styles from '@/styles/components/Flexbox.module.scss';

interface FlexBoxProps {
    direction?: 'row' | 'column';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

const FlexBox: React.FC<FlexBoxProps> = props => {
    const { direction, justify, align, children } = props;
    return (
        <div
            className={`${styles['flex-box']} ${
                direction ? `flex-box--direction-${direction}` : ''
            } ${justify ? `flex-box--justify-${justify}` : ''} ${
                align ? `flex-box--align-${align}` : ''
            }`}
        >
            {children}
        </div>
    );
};

export default FlexBox;
