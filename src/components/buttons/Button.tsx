import React from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps {
  /**
   * Button text label
   */
  label?: string;
  
  /**
   * Click handler
   */
  onClick: () => void;
  
  /**
   * Visual variant of the button (Phoenix design system)
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Button size
   * @default 'default'
   */
  size?: ButtonSize;
  
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Optional icon element rendered on the left side of the label.
   * Pass a FontAwesome icon component or any React element.
   * @example <FontAwesomeIcon icon={faSearch} />
   */
  iconLeft?: React.ReactNode;
  
  /**
   * Optional icon element rendered on the right side of the label.
   * Pass a FontAwesome icon component or any React element.
   * @example <FontAwesomeIcon icon={faArrowRight} />
   */
  iconRight?: React.ReactNode;
  
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
  size = 'default',
  disabled = false,
  iconLeft,
  iconRight,
  rounded = true,
  className = '',
  loading = false,
  type = 'button',
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
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
      {iconLeft && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      {label && <span className="btn__label">{label}</span>}
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </button>
  );
};

export default Button;