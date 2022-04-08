import * as React from 'react';
import { Spinner, SpinnerProps } from './spinner';
import type { Story } from '@ladle/react';

export default {
  title: 'Components/Feedback/Spinner'
};

export const Template: Story<SpinnerProps> = ({ ref, ...args }) => (
  <Spinner {...args} />
);

Template.argTypes = {
  color: {
    control: { type: 'select' },
    options: [
      'primary',
      'neutral',
      'success',
      'info',
      'warning',
      'danger',
      'white',
      'black',
      'hiContrast',
      'loContrast'
    ]
  },
  size: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl']
  }
  // label: {
  //   control: 'text'
  // }
};

export const Sizes = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </div>
);

export const Colors = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Spinner color="primary" />
    <Spinner color="neutral" />
    <Spinner color="success" />
    <Spinner color="hiContrast" />
    <Spinner color="loContrast" />
    <Spinner color="info" />
    <Spinner color="warning" />
    <Spinner color="danger" />
    <Spinner color="white" />
    <Spinner color="black" />
  </div>
);
