import * as React from 'react';
import { Tag } from './tag';
import { TagLabel } from './tag-label';

import { TagIconLeft, TagIconRight } from './tag-icon';
import { TagCloseButton } from './tag-close-button';
import Icon from '../button/MockIcon';

export default {
  title: 'Components/Data Display/Tag',
  component: Tag,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'subtle', 'outline']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'success', 'info', 'warning', 'danger']
    },
    children: {
      control: 'text'
    }
  },
  args: {
    children: 'Tag'
  }
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

export const Variants = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="solid" color="primary">
        Primary
      </Tag>
      <Tag variant="solid" color="neutral">
        Neutral
      </Tag>
      <Tag variant="solid" color="info">
        Info
      </Tag>
      <Tag variant="solid" color="success">
        Success
      </Tag>
      <Tag variant="solid" color="warning">
        Warning
      </Tag>
      <Tag variant="solid" color="danger">
        Danger
      </Tag>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="subtle" color="primary">
        Primary
      </Tag>
      <Tag variant="subtle" color="neutral">
        Neutral
      </Tag>
      <Tag variant="subtle" color="info">
        Info
      </Tag>
      <Tag variant="subtle" color="success">
        Success
      </Tag>
      <Tag variant="subtle" color="warning">
        Warning
      </Tag>
      <Tag variant="subtle" color="danger">
        Danger
      </Tag>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <Tag variant="outline" color="primary">
        Primary
      </Tag>
      <Tag variant="outline" color="neutral">
        Neutral
      </Tag>
      <Tag variant="outline" color="info">
        Info
      </Tag>
      <Tag variant="outline" color="success">
        Success
      </Tag>
      <Tag variant="outline" color="warning">
        Warning
      </Tag>
      <Tag variant="outline" color="danger">
        Danger
      </Tag>
    </div>
  </div>
);

/**
 * The tag component can contain an Icon. This is done by using the `TagIcon` component.
 * Positioning the tag icon can be done by placing it before (left side)
 * or after (right side) the tag component
 */

export const withLeftIcon = () => (
  <div className="flex items-center gap-2">
    <Tag color="primary">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="neutral">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="info">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="success">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="warning">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag color="danger">
      <TagIconLeft icon={Icon} />
      <TagLabel>Tag</TagLabel>
    </Tag>
  </div>
);

export const withRightIcon = () => (
  <div className="flex items-center gap-2">
    <Tag color="primary">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="neutral">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="info">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="success">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="warning">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
    <Tag color="danger">
      <TagLabel>Tag</TagLabel>
      <TagIconRight icon={Icon} />
    </Tag>
  </div>
);

export const withCloseButton = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="subtle" color="primary" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="neutral" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="info" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="success" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="warning" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="subtle" color="danger" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="solid" color="primary" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="neutral" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="info" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="success" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="warning" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="solid" color="danger" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <Tag variant="outline" color="primary" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="neutral" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="info" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="success" size="sm">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="warning" size="md">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag variant="outline" color="danger" size="lg">
        <TagLabel>Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </div>
  </div>
);
