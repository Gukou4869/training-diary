import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrainingTag from "./TrainingTag";

export default {
    title: "TrainingTag",
    component: TrainingTag,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof TrainingTag>;

const Template: ComponentStory<typeof TrainingTag> = (args) => <TrainingTag {...args} />;

export const Default = Template.bind({});

Default.args = {
    part: "sholder",
    menu: 0,
    weight: "100",
    reps: "10",
};
