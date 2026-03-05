import React from 'react';
import './Tooltip.css';

/**
 * Tooltip position matching Figma design variants
 */
type TooltipPosition =
  | 'Top-Left'
  | 'Bottom-Left'
  | 'Top-Right'
  | 'Bottom-Right'
  | 'Top Center'
  | 'Bottom-Center'
  | 'Right'
  | 'Left';

interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: string;

  /**
   * Position of the tooltip relative to the trigger element
   * Matches Figma Position variants
   * @default 'Top-Left'
   */
  position?: TooltipPosition;

  /**
   * The element that triggers the tooltip
   */
  children: React.ReactNode;

  /**
   * Force tooltip to be always visible (useful for development/inspection)
   */
  visible?: boolean;

  /**
   * Additional CSS class names
   */
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'Top-Left',
  children,
  visible,
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    if (visible === undefined) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (visible === undefined) {
      setIsOpen(false);
    }
  };

  // Use controlled visible prop if provided, otherwise use internal state
  const isVisible = visible !== undefined ? visible : isOpen;

  const tooltipClasses = [
    'tooltip',
    `tooltip--${position.toLowerCase().replace(' ', '-')}`,
    isVisible ? 'tooltip--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tooltip-trigger">
        {children}
      </div>
      {isVisible && (
        <div className={tooltipClasses} role="tooltip">
          <div className="tooltip__arrow" />
          <div className="tooltip__content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
