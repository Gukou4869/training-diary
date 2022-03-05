import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalBox from './ModalBox';

export default {
    title: 'ModalBox',
    component: ModalBox,
} as ComponentMeta<typeof ModalBox>;

const Template: ComponentStory<typeof ModalBox> = args => (
    <ModalBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    open: true,
};
