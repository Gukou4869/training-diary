import React from 'react';
import Select from './Select';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { type } from 'os';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: ['sholder', 'ab', 'chest'],
  placeholder: '部位を選択してください',
};
