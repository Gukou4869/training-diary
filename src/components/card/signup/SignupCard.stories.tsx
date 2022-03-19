import React from 'react';
import SignupCard from './SignupCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'SignUp',
  component: SignupCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SignupCard>;

const Template: ComponentStory<typeof SignupCard> = (args) => <SignupCard {...args} />;

export const Default = Template.bind({});
