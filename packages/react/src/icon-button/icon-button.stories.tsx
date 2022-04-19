import * as React from 'react';
import { IconButton, IconButtonProps } from './icon-button';

import Icon from '../button/MockIcon';
import type { Story } from '@ladle/react';

export default {
  title: 'Components/Forms/Icon Button'
};

export const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
);

Template.args = {
  'aria-label': 'Button',
  icon: <Icon style={{ height: '1em', width: '1em' }} />
};

Template.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['solid', 'flat', 'ghost', 'outline', 'link']
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
    control: { type: 'radio' },
    options: ['start', 'end']
  }

  // loading: {
  //   control: { type: 'boolean' }
  // },

  // disabled: {
  //   control: { type: 'boolean' }
  // },
  // loadingText: {
  //   control: 'text'
  // },
  // rounded: {
  //   control: { type: 'boolean' }
  // },
  // icon: {
  //   control: { type: 'object' }
  // },
  // 'aria-label': {
  //   control: 'text'
  // }
};
