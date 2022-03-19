import React from 'react';
import Login from './LoginCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Login',
  component: Login,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
