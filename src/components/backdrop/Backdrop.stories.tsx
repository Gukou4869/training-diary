import React from 'react';
import { ComponentMeta } from '@storybook/react';
import BackDrop from './Backdrop';

export default {
    title: 'BackDrop',
    component: BackDrop,
} as ComponentMeta<typeof BackDrop>;

export const Default = () => <BackDrop />;
