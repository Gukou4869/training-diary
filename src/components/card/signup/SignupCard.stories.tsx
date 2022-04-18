import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignupCard from "./SignupCard";

export default {
    title: "SignUp",
    component: SignupCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SignupCard>;

const Template: ComponentStory<typeof SignupCard> = (args) => <SignupCard {...args} />;

export const Default = Template.bind({});
