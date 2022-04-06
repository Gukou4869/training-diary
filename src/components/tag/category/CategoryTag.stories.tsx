import React from 'react';
import CategoryBadge from './CategoryTag';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { type } from 'os';

export default {
    title: 'CategoryBadge',
    component: CategoryBadge,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryBadge>;

const Template: ComponentStory<typeof CategoryBadge> = (args) => <CategoryBadge type={'ab'} />;

export const Default = Template.bind({});
