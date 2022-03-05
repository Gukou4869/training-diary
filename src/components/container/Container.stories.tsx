import * as React from "react";
import Container from "./Container";
import "./storyStyles.scss";

export default {
    title: "Gukou UI/Atoms/Grid/Container",
    component: Container,
};

export const Default = (args) => (
    <Container {...args}>
        <div className="container__storybook">
            <h1>Default Container</h1>
            <h3>Max Widths!!!</h3>
        </div>
    </Container>
);

Default.args = {
    fullWidth: false,
};

Default.argTypes = {
    fullWidth: {
        table: {
            disable: true,
        },
    },
};

export const FullWidth = (args) => (
    <Container {...args}>
        <div className="container__storybook">
            <h1>Full Width Container</h1>
            <h3>No Max Widths!!!</h3>
        </div>
    </Container>
);

FullWidth.args = {
    fullWidth: true,
};

FullWidth.argTypes = {
    fullWidth: {
        table: {
            disable: true,
        },
    },
};
