import React from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';

interface ButtonProps {
  /**
   * Button text label
   */
  label: string;
  
  /**\n   * Click handler
   */
  onClick: () => void;
  
  /**
   * Visual variant of the button (Phoenix design system)
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Optional icon element (rendered before label)
   */
  icon?: React.ReactNode;
  
  /**
   * Whether corners should be rounded (20px vs 4px)
   * @default true
   */
  rounded?: boolean;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Loading state (typically shows spinner)
   * @default false
   */
  loading?: boolean;
  
  /**
   * Button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  icon,
  rounded = true,
  className = '',
  loading = false,
  type = 'button',
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    rounded ? 'btn--rounded' : '',
    disabled || loading ? 'btn--disabled' : '',
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

export default Button;