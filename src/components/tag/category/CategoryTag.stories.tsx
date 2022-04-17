import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryTag from "./CategoryTag";

export default {
    title: "CategoryTag",
    component: CategoryTag,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CategoryTag>;

const Template: ComponentStory<typeof CategoryTag> = (args) => <CategoryTag {...args} />;

export const Default = Template.bind({});
