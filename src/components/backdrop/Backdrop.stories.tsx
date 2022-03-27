import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BackDrop from './Backdrop';

export default {
  title: 'BackDrop',
  component: BackDrop,
} as ComponentMeta<typeof BackDrop>;

const Template: ComponentStory<typeof BackDrop> = (args) => <BackDrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
