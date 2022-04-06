import React from 'react';
import CreateLogCard from './CreateLogCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '@/components/modal/Modal';

export default {
    title: 'CreateLogCard',
    component: CreateLogCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateLogCard>;

const Template: ComponentStory<typeof CreateLogCard> = (args) => <CreateLogCard {...args} />;

export const Default = Template.bind({});

const withModal: ComponentStory<typeof CreateLogCard> = (args) => {
    return (
        <Modal open={true} handleClose={null}>
            <CreateLogCard />
        </Modal>
    );
};

export const Default2 = withModal.bind({});
