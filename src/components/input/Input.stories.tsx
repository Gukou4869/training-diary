import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";

export default {
    title: "Input",
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "text",
    label: "Email",
    hasError: false,
    onChange: action("clicked"),
};
