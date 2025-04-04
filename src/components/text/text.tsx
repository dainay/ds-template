import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './text.module.css';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  variant?: 'heading' | 'subheading' | 'body';
}

export const Text = ({ className, variant = 'body', ...props }: TextProps) => {
  return (
    <p
      className={clsx(classes['ds-text'], classes[`ds-text--${variant}`], className)}
      {...props}
    > Text </p>
  );
};
