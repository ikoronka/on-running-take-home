import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'shop' | 'text';
  fullWidth?: boolean;
  to?: string;
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  to,
  href,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.btn,
    styles[`btn--${variant}`],
    fullWidth ? styles['btn--full'] : '',
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // classic button
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};
