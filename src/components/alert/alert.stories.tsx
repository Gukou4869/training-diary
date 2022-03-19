import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'error',
  message: 'こちらのEmailアドレスは現在登録されていません',
};
