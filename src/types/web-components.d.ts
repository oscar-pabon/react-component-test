declare namespace JSX {
  interface IntrinsicElements {
    'liva-button': LivaButtonProps;
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
  children?: React.ReactNode;
}
