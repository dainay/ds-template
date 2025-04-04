import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outlined';
  hover?: boolean;
}

export const Button = ({ className, variant = 'default', hover = false, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        classes['ds-button'],
        classes[`ds-button--${variant}`],
        { [classes['ds-button--hover']]: hover },
        className
      )}
      {...props}
    > Button </button>
  );
};
