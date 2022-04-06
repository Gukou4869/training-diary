import React from 'react';
import TrainingCard from './TrainingCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'TrainingCard',
    component: TrainingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrainingCard>;

const Template: ComponentStory<typeof TrainingCard> = (args) => <TrainingCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'Bench Press',
};
