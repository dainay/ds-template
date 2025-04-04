import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
  variant?: 'default' | 'success' | 'error';
  children?: React.ReactNode;
}

export const Chip = ({ className, children, variant = 'default', ...props }: ChipProps) => {
  return (
    <span
      className={clsx(classes['ds-chip'], classes[`ds-chip--${variant}`], className)}
      {...props}
    > {children} </span>
  );
};
