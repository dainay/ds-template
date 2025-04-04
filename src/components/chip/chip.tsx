import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'success' | 'error';
}

export const Chip = ({ className, variant = 'default', ...props }: ChipProps) => {
  return (
    <button
      className={clsx(classes['ds-chip'], classes[`ds-chip--${variant}`], className)}
      {...props}
    > Chip </button>
  );
};
