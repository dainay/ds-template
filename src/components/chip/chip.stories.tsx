import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Default Chip',
    variant: 'default',
  },
};


