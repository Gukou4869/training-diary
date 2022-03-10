import React from 'react';
import Alert from './Alert';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Alert',
    component: Alert,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'error',
    message: 'こちらのEmailアドレスは現在登録されていません',
};
