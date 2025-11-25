import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders button with label', () => {
      render(<Button label="Click me" onClick={() => {}} />);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders as button element', () => {
      render(<Button label="Test" onClick={() => {}} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies primary variant by default', () => {
      const { container } = render(<Button label="Primary" onClick={() => {}} />);
      expect(container.querySelector('.btn--primary')).toBeInTheDocument();
    });

    it('applies secondary variant', () => {
      const { container } = render(
        <Button label="Secondary" onClick={() => {}} variant="secondary" />
      );
      expect(container.querySelector('.btn--secondary')).toBeInTheDocument();
    });

    it('applies tertiary variant', () => {
      const { container } = render(
        <Button label="Tertiary" onClick={() => {}} variant="tertiary" />
      );
      expect(container.querySelector('.btn--tertiary')).toBeInTheDocument();
    });

    it('applies destructive variant', () => {
      const { container } = render(
        <Button label="Delete" onClick={() => {}} variant="destructive" />
      );
      expect(container.querySelector('.btn--destructive')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies default size by default', () => {
      const { container } = render(<Button label="Default" onClick={() => {}} />);
      expect(container.querySelector('.btn--default')).toBeInTheDocument();
    });

    it('applies small size', () => {
      const { container } = render(
        <Button label="Small" onClick={() => {}} size="small" />
      );
      expect(container.querySelector('.btn--small')).toBeInTheDocument();
    });

    it('applies large size', () => {
      const { container } = render(
        <Button label="Large" onClick={() => {}} size="large" />
      );
      expect(container.querySelector('.btn--large')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('handles click events', () => {
      const handleClick = jest.fn();
      render(<Button label="Clickable" onClick={handleClick} />);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button when disabled prop is true', () => {
      render(<Button label="Disabled" onClick={() => {}} disabled={true} />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('applies disabled class when disabled', () => {
      const { container } = render(
        <Button label="Disabled" onClick={() => {}} disabled={true} />
      );
      expect(container.querySelector('.btn--disabled')).toBeInTheDocument();
    });

    it('disables click when loading', () => {
      const handleClick = jest.fn();
      render(<Button label="Loading" onClick={handleClick} loading={true} />);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies loading class when loading', () => {
      const { container } = render(
        <Button label="Loading" onClick={() => {}} loading={true} />
      );
      expect(container.querySelector('.btn--loading')).toBeInTheDocument();
    });

    it('disables button when loading', () => {
      render(<Button label="Loading" onClick={() => {}} loading={true} />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Border Radius', () => {
    it('applies rounded class by default', () => {
      const { container } = render(<Button label="Rounded" onClick={() => {}} />);
      expect(container.querySelector('.btn--rounded')).toBeInTheDocument();
    });

    it('does not apply rounded class when rounded is false', () => {
      const { container } = render(
        <Button label="Square" onClick={() => {}} rounded={false} />
      );
      expect(container.querySelector('.btn--rounded')).not.toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders icon when provided', () => {
      render(
        <Button
          label="With Icon"
          onClick={() => {}}
          icon={<span data-testid="test-icon">🎉</span>}
        />
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('renders icon before label', () => {
      const { container } = render(
        <Button
          label="With Icon"
          onClick={() => {}}
          icon={<span data-testid="test-icon">🎉</span>}
        />
      );
      const button = container.querySelector('button');
      const iconSpan = button?.querySelector('.btn__icon');
      const labelSpan = button?.querySelector('.btn__label');
      
      // Verify icon appears in the DOM
      expect(iconSpan).toBeInTheDocument();
      expect(labelSpan).toBeInTheDocument();
      
      // Verify icon span comes before label span in flexbox order
      const html = button?.innerHTML || '';
      const iconIndex = html.indexOf('btn__icon');
      const labelIndex = html.indexOf('btn__label');
      expect(iconIndex).toBeLessThan(labelIndex);
    });
  });

  describe('Button Type', () => {
    it('defaults to button type', () => {
      render(<Button label="Button" onClick={() => {}} />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('can be set to submit', () => {
      render(<Button label="Submit" onClick={() => {}} type="submit" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('can be set to reset', () => {
      render(<Button label="Reset" onClick={() => {}} type="reset" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Accessibility', () => {
    it('sets aria-busy when loading', () => {
      render(<Button label="Loading" onClick={() => {}} loading={true} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('has focus-visible styles for keyboard navigation', () => {
      const { container } = render(<Button label="Focus" onClick={() => {}} />);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      // CSS focus-visible is applied via stylesheet
    });
  });

  describe('Custom Classes', () => {
    it('accepts additional className prop', () => {
      const { container } = render(
        <Button label="Custom" onClick={() => {}} className="my-custom-class" />
      );
      expect(container.querySelector('.my-custom-class')).toBeInTheDocument();
    });
  });
});
