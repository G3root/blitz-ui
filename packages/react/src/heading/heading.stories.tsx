import * as React from 'react';
import { Heading, HeadingProps } from './heading';
import type { Story } from '@ladle/react';

export default {
  title: 'Components/Typography/Heading'
};

export const Template: Story<HeadingProps> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

Template.argTypes = {
  size: {
    control: { type: 'select' },
    options: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl'
    ]
  }
};

Template.args = {
  children: "I'm a Heading"
};

export const Sizes = () => (
  <div className="flex  gap-2 flex-col">
    <Heading size="9xl">I'm a 9xl Heading</Heading>
    <Heading size="8xl">I'm a 8xl Heading</Heading>
    <Heading size="7xl">I'm a 7xl Heading</Heading>
    <Heading size="6xl">I'm a 6xl Heading</Heading>
    <Heading size="5xl">I'm a 5xl Heading</Heading>
    <Heading size="4xl">I'm a 4xl Heading</Heading>
    <Heading size="3xl">I'm a 3xl Heading</Heading>
    <Heading size="2xl">I'm a 2xl Heading</Heading>
    <Heading size="xl">I'm a xl Heading</Heading>
    <Heading size="lg">I'm a lg Heading</Heading>
    <Heading size="md">I'm a md Heading</Heading>
    <Heading size="sm">I'm a sm Heading</Heading>
    <Heading size="xs">I'm a xs Heading</Heading>
  </div>
);
