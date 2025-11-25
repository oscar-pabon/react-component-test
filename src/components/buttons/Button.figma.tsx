import { figma } from '@figma/code-connect';
import Button from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-System-Tokens?node-id=1124-7123&m=dev',
  {
    example: ({ label, variant, disabled, loading, icon, className }) => (
      <Button
        label={label}
        variant={variant}
        disabled={disabled}
        loading={loading}
        icon={icon}
        onClick={() => {}}
        className={className}
      />
    ),
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
        ghost: 'ghost',
        destructive: 'destructive',
      }),
      disabled: figma.boolean('Disabled'),
      loading: figma.boolean('Loading'),
      icon: figma.node('Icon'),
      rounded: figma.boolean('Rounded'),
      className: figma.string('Class Name'),
      type: figma.enum('Type', {
        button: 'button',
        submit: 'submit',
        reset: 'reset',
      }),
    },
  }
);
