import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Alert from "./Alert";

export default {
    title: "Alert",
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;
export const Success: ComponentStory<typeof Alert> = Template.bind({});

Success.args = {
    type: "success",
    message: "ログインに成功しました！",
};

export const Error: ComponentStory<typeof Alert> = Template.bind({});
Error.args = {
    type: "error",
    message: "こちらのEmailアドレスは現在登録されていません",
};

// test
// onClick buttonが起動するか
Success.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClose).toHaveBeenCalled();
    await expect(args.onClose).toBeNull();
};
