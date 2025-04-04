import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outlined'; 
  children?: React.ReactNode;
}

export const Button = ({ className, children, variant = 'default', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        classes['ds-button'],
        classes[`ds-button--${variant}`],
        className
      )}
      {...props}
    > {children} </button>
  );
};
