import React, { ReactElement, useState } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Story, ComponentMeta, ComponentStory, ComponentStoryObj } from '@storybook/react';
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

export const ASFD: ComponentStory<typeof Alert> = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = (): void => {
    setOpen((prevState) => !prevState);
  };

  if (open) {
    return (
      <Alert
        type="error"
        message="こちらのEmailアドレスは現在登録されていません"
        onClose={handleToggle}
      />
    );
  } else {
    return (
      <div className="" onClick={handleToggle}>
        クリックするとアラートが出現するよ
      </div>
    );
  }
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'こちらのEmailアドレスは現在登録されていません',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'ログインに成功しました！',
};

ASFD.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole('button'));
};
