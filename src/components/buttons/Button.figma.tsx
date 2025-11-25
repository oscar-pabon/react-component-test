import { figma } from '@figma/code-connect';
import Button from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-System-Tokens?node-id=1124-7123&m=dev',
  {
    example: () => (
      <Button
        label="Button"
        variant="primary"
        onClick={() => {}}
      />
    ),
  }
);

