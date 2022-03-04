import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Overlay from './Overlay';

export default {
    title: 'Overlay',
    component: Overlay,
} as ComponentMeta<typeof Overlay>;

export const Default = () => <Overlay />;
