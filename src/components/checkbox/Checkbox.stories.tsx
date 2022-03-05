import React from 'react';
import Checkbox from './Checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
    <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'Remenber Me',
    open: false,
};
