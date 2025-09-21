import classNames from 'classnames';
import React from 'react';

// Extend all native <button> props so you can use disabled, onClick, etc.
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, ...rest }) => {
  return (
    <button type={type} className={classNames('btn', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
