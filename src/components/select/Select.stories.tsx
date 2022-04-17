import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { type } from "os";
import Select from "./Select";

export default {
    title: "Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
    options: ["sholder", "ab", "chest"],
    placeholder: "部位を選択してください",
};
