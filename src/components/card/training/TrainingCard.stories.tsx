import { ComponentMeta, ComponentStory } from "@storybook/react";
import benchPress from "../../../assets/benchpress.jpeg";
import TrainingCard from "./TrainingCard";

export default {
    title: "TrainingCard",
    component: TrainingCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof TrainingCard>;

const Template: ComponentStory<typeof TrainingCard> = (args) => <TrainingCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    training: {
        name: "ベンチプレス",
        src: benchPress,
    },
};
