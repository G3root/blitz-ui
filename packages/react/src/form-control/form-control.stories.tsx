import * as React from 'react';
import { Textarea } from '../textarea/textarea';
import { FormControl, FormControlProps } from './form-control';
import { FormErrorMessage } from './form-error';
import { FormHelperText } from './form-helper-text';
import { FormLabel } from './form-label';
import type { Story } from '@ladle/react';

export default {
  title: 'Components/Forms/FormControl'
};

export const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <FormLabel htmlFor="first-name">First name</FormLabel>
    <Textarea />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
  </FormControl>
);

// Template.argTypes = {
//   isRequired: {
//     control: { type: 'boolean' }
//   },
//   isInvalid: {
//     control: { type: 'boolean' }
//   },
//   isReadOnly: {
//     control: { type: 'boolean' }
//   }
// };

export const InputExample = () => (
  <FormControl isInvalid isRequired>
    <FormLabel htmlFor="first-name">First name</FormLabel>
    <Textarea />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
);
