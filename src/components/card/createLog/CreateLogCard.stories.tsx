import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "@/components/modal/Modal";
import CreateLogCard from "./CreateLogCard";

export default {
    title: "CreateLogCard",
    component: CreateLogCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CreateLogCard>;

const Template: ComponentStory<typeof CreateLogCard> = (args) => <CreateLogCard {...args} />;

export const Default = Template.bind({});

const withModal: ComponentStory<typeof CreateLogCard> = (args) => (
    <Modal open handleClose={null}>
        <CreateLogCard />
    </Modal>
);

export const Default2 = withModal.bind({});
