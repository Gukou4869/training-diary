import React from 'react';
import { Input } from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    label: 'Email',
    hasError: false,
    onChange: action('clicked'),
};
