import * as React from 'react';
import { Textarea } from '../textarea/textarea';
import { FormControl } from './form-control';
import { FormErrorMessage } from './form-error';
import { FormHelperText } from './form-helper-text';
import { FormLabel } from './form-label';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Forms/FormControl',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => <div className="flex justify-center w-[90vw]">{Story()}</div>
  ],
  isRequired: {
    control: { type: 'boolean' }
  },
  isInvalid: {
    control: { type: 'boolean' }
  },
  isReadOnly: {
    control: { type: 'boolean' }
  }
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args}>
    <FormLabel htmlFor="first-name">First name</FormLabel>
    <Textarea />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
  </FormControl>
);

export const Default = Template.bind({});

export const InputExample = () => (
  <FormControl isInvalid isRequired>
    <FormLabel htmlFor="first-name">First name</FormLabel>
    <Textarea />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
);
