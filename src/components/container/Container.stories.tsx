import * as React from 'react';
import Container from './Container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Gukou UI/Atoms/Grid/Container',
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (args) => (
  <Container>
    <div className="container__storybook">
      <h1>Default Container</h1>
      <h3>Max Widths!!!</h3>
    </div>
  </Container>
);
