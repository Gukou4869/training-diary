import { ComponentMeta } from "@storybook/react";
import HomeHeader from "./HomeHeader";

export default {
    title: "Header",
    component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>;

export function Default(): JSX.Element {
    return <HomeHeader />;
}
