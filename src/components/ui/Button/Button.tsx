import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'shop' | 'text';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClassNames = [
    styles.btn,
    styles[`btn--${variant}`],
    fullWidth ? styles[`btn--full`] : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};
