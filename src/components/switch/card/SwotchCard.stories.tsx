import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SwitchCard from "./SwitchCard";

export default {
    title: "SwitchCard",
    component: SwitchCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SwitchCard>;

const Template: ComponentStory<typeof SwitchCard> = (args) => <SwitchCard {...args} />;

export const Default = Template.bind({});
