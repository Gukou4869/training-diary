import React, { useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClose: { action: true },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'ログインに成功しました！',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'こちらのEmailアドレスは現在登録されていません',
};

//test
//onClick buttonが起動するか
Success.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClose).toHaveBeenCalled();
  await expect(args.onClose).toBeNull();
};
