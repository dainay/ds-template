import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
    variant: 'default'
  }
};

export const Success: Story = {
  args: {
    children: 'Success Chip',
    variant: 'success'
  }
};

export const Error: Story = {
  args: {
    children: 'Error Chip',
    variant: 'error'
  }
};


