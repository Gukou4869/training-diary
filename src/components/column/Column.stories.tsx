import React from 'react';
import Container from '../container/Container';
import Row from '../row/Row';
import Column from './Column';

export default {
    title: 'Gukou UI/Atoms/Grid/Column',
};

const DefaultBreakpointExtraLarge = () => {
    const leftCol = 4;
    const middleCol = 4;
    const rightCol = 4;
    return (
        <Container>
            <Row>
                <Column xl={leftCol}>
                    <div className="col__storybook">
                        <h3>Left Column</h3>
                        <p>xl-{leftCol}</p>
                    </div>
                </Column>
                <Column xl={middleCol}>
                    <div className="col__storybook">
                        <h3>Middle Column</h3>
                        <p>xl-{middleCol}</p>
                    </div>
                </Column>
                <Column xl={rightCol}>
                    <div className="col__storybook">
                        <h3>Right Column</h3>
                        <p>xl-{rightCol}</p>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export const BreakpointExtraLarge = DefaultBreakpointExtraLarge.bind({});

const DefaultBreakpointLarge = () => {
    const leftCol = 4;
    const middleCol = 8;
    const rightCol = 12;
    return (
        <Container>
            <Row>
                <Column lg={leftCol}>
                    <div className="col__storybook">
                        <h3>Left Column</h3>
                        <p>lg-{leftCol}</p>
                    </div>
                </Column>
                <Column lg={middleCol}>
                    <div className="col__storybook">
                        <h3>Middle Column</h3>
                        <p>lg-{middleCol}</p>
                    </div>
                </Column>
                <Column lg={rightCol}>
                    <div className="col__storybook">
                        <h3>Right Column</h3>
                        <p>lg-{rightCol}</p>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export const BreakpointLarge = DefaultBreakpointLarge.bind({});

const DefaultBreakpointMedium = () => {
    const leftCol = 6;
    const middleCol = 6;
    const rightCol = 12;
    return (
        <Container>
            <Row>
                <Column md={leftCol}>
                    <div className="col__storybook">
                        <h3>Left Column</h3>
                        <p>md-{leftCol}</p>
                    </div>
                </Column>
                <Column md={middleCol}>
                    <div className="col__storybook">
                        <h3>Middle Column</h3>
                        <p>md-{middleCol}</p>
                    </div>
                </Column>
                <Column md={rightCol}>
                    <div className="col__storybook">
                        <h3>Right Column</h3>
                        <p>md-{rightCol}</p>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export const BreakpointMedium = DefaultBreakpointMedium.bind({});

const DefaultBreakpointSmall = () => {
    const leftCol = 8;
    const middleCol = 4;
    const rightCol = 12;
    return (
        <Container>
            <Row>
                <Column sm={leftCol}>
                    <div className="col__storybook">
                        <h3>Left Column</h3>
                        <p>sm-{leftCol}</p>
                    </div>
                </Column>
                <Column sm={middleCol}>
                    <div className="col__storybook">
                        <h3>Middle Column</h3>
                        <p>sm-{middleCol}</p>
                    </div>
                </Column>
                <Column sm={rightCol}>
                    <div className="col__storybook">
                        <h3>Right Column</h3>
                        <p>sm-{rightCol}</p>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export const BreakpointSmall = DefaultBreakpointSmall.bind({});

const DefaultBreakpointExtraSmall = () => {
    const leftCol = 12;
    const middleCol = 6;
    const rightCol = 6;
    return (
        <Container>
            <Row>
                <Column xs={leftCol}>
                    <div className="col__storybook">
                        <h3>Left Column</h3>
                        <p>xs-{leftCol}</p>
                    </div>
                </Column>
                <Column xs={middleCol}>
                    <div className="col__storybook">
                        <h3>Middle Column</h3>
                        <p>xs-{middleCol}</p>
                    </div>
                </Column>
                <Column xs={rightCol}>
                    <div className="col__storybook">
                        <h3>Right Column</h3>
                        <p>xs-{rightCol}</p>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export const BreakpointExtraSmall = DefaultBreakpointExtraSmall.bind({});
