import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    hover: false
  }
};

export const Default_hover: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    hover: true
  }
};

export const Outlined_hover: Story = {
  args: {
    children: 'Default Button',
    variant: 'outlined', 
    hover: true
  }
};

export const Outlined: Story = {
  args: {
    children: 'Default Button',
    variant: 'outlined',
    hover: false
  }
};


