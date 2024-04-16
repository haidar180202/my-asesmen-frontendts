import React from 'react';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, ...props }) => {
  return (
    <button className={`w-full ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
