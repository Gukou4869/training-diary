import React from 'react';
import { ComponentMeta } from '@storybook/react';
import HomeHeader from './HomeHeader';

export default {
    title: 'Header',
    component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>;

export const Default = (): JSX.Element => <HomeHeader />;
