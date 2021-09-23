import React from 'react';
import { Story, Meta } from '@storybook/react';
import Skeleton from '@src/atom/Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (props) => <Skeleton {...props} />;

export const skeleton = Template.bind({});

skeleton.args = {
  variant: 'rect',
  animation: 'wave',
  size: 'xl',
  fitContent: false,
  withChildren: false,
};