import * as React from 'react';
import { Spinner } from './spinner';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => <div className="flex justify-center w-[90vw]">{Story()}</div>
  ],
  argTypes: {
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
  }
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});

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
