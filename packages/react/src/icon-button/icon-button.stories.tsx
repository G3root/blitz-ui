import * as React from 'react';
import { IconButton } from './icon-button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../button/MockIcon';

export default {
  title: 'Components/Forms/Icon Button',
  component: IconButton,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => <div className="flex justify-center w-[90vw]">{Story()}</div>
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'flat', 'ghost', 'outline', 'link']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'success', 'info', 'warning', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    spinnerPlacement: {
      control: { type: 'inline-radio' },
      options: ['start', 'end']
    },

    loading: {
      control: { type: 'boolean' }
    },

    disabled: {
      control: { type: 'boolean' }
    },
    loadingText: {
      control: 'text'
    },
    rounded: {
      control: { type: 'boolean' }
    },
    icon: {
      control: { type: 'object' }
    },
    'aria-label': {
      control: 'text'
    }
  },
  args: {
    'aria-label': 'Button',
    icon: <Icon style={{ height: '1em', width: '1em' }} />
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
