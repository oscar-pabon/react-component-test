declare namespace JSX {
  interface IntrinsicElements {
    'liva-button': LivaButtonProps;
    'liva-tooltip': LivaTooltipProps;
  }
}

interface LivaButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  rounded?: boolean;
  iconOnly?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  'aria-label'?: string;
  children?: React.ReactNode;
}

interface LivaTooltipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  content?: string;
  position?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' | 'top-center' | 'bottom-center' | 'right' | 'left';
  visible?: boolean;
  children?: React.ReactNode;
}
