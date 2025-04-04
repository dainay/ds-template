import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading Text',
    variant: 'heading'
  }
};

export const Success: Story = {
  args: {
    children: 'Subheading Text',
    variant: 'subheading'
  }
};

export const Error: Story = {
  args: {
    children: 'Body Text',
    variant: 'body'
  }
};


