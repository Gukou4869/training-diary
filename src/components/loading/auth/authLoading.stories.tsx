import React from 'react';
import { ComponentMeta } from '@storybook/react';
import AuthLoading from './AuthLoading';

export default {
  title: 'AuthLoading',
  component: AuthLoading,
} as ComponentMeta<typeof AuthLoading>;

export const Default = (): JSX.Element => <AuthLoading loading={true} />;
