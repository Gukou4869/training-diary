import * as React from "react";
import Container from "../column/Column";
import Row from "./Row";
import Column from "../column/Column";
import "./storyStyles.scss";
import { ComponentMeta } from "@storybook/react";

export default {
    title: "Gukou UI/Atoms/Grid/Row",
    component: Row,
} as ComponentMeta<typeof Row>;

const DefaultTwoColumns = () => (
    <Container>
        <Row>
            <Column md={6} lg={10} xl={12}>
                <div className="row__col__storybook">
                    <h1>Column1</h1>
                </div>
            </Column>
            <Column md={6} xl={2}>
                <div className="row__col__storybook">
                    <h1>Column2</h1>
                </div>
            </Column>
        </Row>
    </Container>
);

export const TwoColumns = DefaultTwoColumns.bind({});

TwoColumns.parameters = {
    controls: { hideNoControlsWarning: true },
};

const DefaultFourColumns = () => (
    <Container>
        <Row>
            <Column md={6}>
                <div className="row__col__storybook">
                    <h1>Column</h1>
                </div>
            </Column>
            <Column md={6}>
                <div className="row__col__storybook">
                    <h1>Column</h1>
                </div>
            </Column>
        </Row>
        <Row>
            <Column md={6}>
                <div className="row__col__storybook">
                    <h1>Column</h1>
                </div>
            </Column>
            <Column md={6}>
                <div className="row__col__storybook">
                    <h1>Column</h1>
                </div>
            </Column>
        </Row>
    </Container>
);

export const FourColumns = DefaultFourColumns.bind({});

FourColumns.parameters = {
    controls: { hideNoControlsWarning: true },
};
