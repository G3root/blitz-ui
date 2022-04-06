import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => <div className="flex justify-center w-[90vw]">{Story()}</div>
  ]
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});

export const basic = () => <Textarea defaultValue="This is a textarea" />;

export const rows = () => (
  <Textarea defaultValue="This is a textarea" rows={12} />
);

export const disabled = () => (
  <Textarea disabled placeholder="A disabled textarea" />
);

export const invalid = () => (
  <Textarea invalid placeholder="An invalid textarea" />
);

export const withSizes = () => (
  <div className="flex flex-col gap-4 w-full">
    <Textarea size="xs" placeholder="This is a x-small textarea" />
    <Textarea size="sm" placeholder="This is a small textarea" />
    <Textarea placeholder="This is a default textarea" />
    <Textarea size="lg" placeholder="This is a large textarea" />
  </div>
);

export const variants = () => (
  <div className="flex flex-col gap-4 w-full">
    <Textarea variant="outline" placeholder="This is outline variant" />
    <Textarea variant="flushed" placeholder="This is flushed variant" />
    <Textarea variant="filled" placeholder="This is filled variant" />
    <Textarea variant="unstyled" placeholder="This is unstyled variant" />
  </div>
);
