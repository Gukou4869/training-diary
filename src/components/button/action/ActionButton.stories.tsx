import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionButton from "./ActionButton";

export default {
    title: "Button",
    component: ActionButton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Button",
    size: "md",
    float: false,
    onClick: action("clicked"),
};
