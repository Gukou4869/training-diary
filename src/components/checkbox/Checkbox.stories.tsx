import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Checkbox from "./Checkbox";

export default {
    title: "Checkbox",
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Remenber Me",
    checked: false,
};
