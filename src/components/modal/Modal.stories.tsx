import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default = () => <Modal />;
