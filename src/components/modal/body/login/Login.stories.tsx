import React from 'react';
import Login from './Login';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: Login,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = args => <Login {...args} />;

export const Default = Template.bind({});
