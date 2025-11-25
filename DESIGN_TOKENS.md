# Phoenix System Design Tokens - Button Component

This document describes the design tokens used in the Button component, sourced from the Figma Phoenix System design file.

## Design Tokens Source

All design tokens are extracted from: [Phoenix System Tokens - Figma](https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-System-Tokens)

## Token Categories

### Typography

- **Font Family**: Inter
- **Font Weight**: 500 (Medium)
- **Line Height**: 1.2

#### Font Sizes

- **Small**: 14px
- **Default**: 16px
- **Large**: 18px

### Sizing

#### Min Heights

- **Small**: 32px
- **Default**: 40px
- **Large**: 48px

#### Padding

**Small**:
- Horizontal: 12px
- Vertical: 4px

**Default**:
- Horizontal: 16px
- Vertical: 8px

**Large**:
- Horizontal: 20px
- Vertical: 12px

### Border & Radius

- **Border Width**: 1px
- **Border Radius (default)**: 4px
- **Border Radius (rounded)**: 20px
- **Icon Gap**: 8px

## Color Variants

### Primary Variant

**Purpose**: Main call-to-action button

| State    | Background | Text      | Border    |
|----------|-----------|-----------|-----------|
| Default  | #3d0fdc   | #ffffff   | #3d0fdc   |
| Hover    | #300cac   | #ffffff   | #300cac   |
| Active   | #23087c   | #ffffff   | #3d0fdc   |
| Focus    | #300cac   | #ffffff   | #300cac   |
| Disabled | #e2e8f0   | #64748b   | #94a3b8   |

### Secondary Variant

**Purpose**: Secondary actions

| State    | Background | Text      | Border    |
|----------|-----------|-----------|-----------|
| Default  | #ffffff   | #5b2ff1   | #5b2ff1   |
| Hover    | #f0ecfe   | #3d0fdc   | #3d0fdc   |
| Active   | #cabcfa   | #23087c   | #23087c   |
| Focus    | #f0ecfe   | #3d0fdc   | #3d0fdc   |
| Disabled | #e2e8f0   | #64748b   | #94a3b8   |

### Tertiary Variant

**Purpose**: Subtle/low emphasis actions

| State    | Background | Text      | Border    |
|----------|-----------|-----------|-----------|
| Default  | #ffffff   | #475569   | #94a3b8   |
| Hover    | #e2e8f0   | #475569   | #64748b   |
| Active   | #cbd5e1   | #334155   | #475569   |
| Focus    | #e2e8f0   | #475569   | #64748b   |
| Disabled | #e2e8f0   | #64748b   | #94a3b8   |

### Ghost Variant

**Purpose**: Minimal/transparent appearance

| State    | Background | Text      | Border      |
|----------|-----------|-----------|-------------|
| Default  | transparent | #475569   | transparent |
| Hover    | transparent | #334155   | transparent |
| Active   | transparent | #3d0fdc   | transparent |
| Focus    | transparent | #334155   | transparent |
| Disabled | transparent | #64748b   | transparent |

### Destructive Variant

**Purpose**: Dangerous/destructive actions (delete, remove)

| State    | Background | Text      | Border    |
|----------|-----------|-----------|-----------|
| Default  | #ef4444   | #ffffff   | #ef4444   |
| Hover    | #dc2626   | #ffffff   | #dc2626   |
| Active   | #b91c1c   | #ffffff   | #b91c1c   |
| Focus    | #dc2626   | #ffffff   | #dc2626   |
| Disabled | #e2e8f0   | #64748b   | #94a3b8   |

## Usage

All design tokens are defined as CSS custom properties in `src/components/buttons/Button.css` and are automatically applied based on the button's variant and state.

### Component Props

```typescript
interface ButtonProps {
  label: string;                                    // Button text
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive'; // Default: 'primary'
  size?: 'small' | 'default' | 'large';           // Default: 'default'
  disabled?: boolean;                              // Default: false
  loading?: boolean;                               // Default: false
  icon?: string;                                   // Optional icon (emoji or element)
  rounded?: boolean;                               // Default: false
  onClick?: () => void;                            // Click handler
  type?: 'button' | 'submit' | 'reset';           // Default: 'button'
  className?: string;                              // Additional CSS classes
}
```

### Example Usage

```tsx
// Primary button
<Button label="Save" variant="primary" onClick={handleSave} />

// Small secondary button
<Button label="Edit" variant="secondary" size="small" onClick={handleEdit} />

// Large destructive button
<Button label="Delete" variant="destructive" size="large" onClick={handleDelete} />

// Ghost button with icon
<Button label="Info" variant="ghost" icon="ℹ️" onClick={handleInfo} />

// Rounded button
<Button label="Continue" variant="primary" rounded onClick={handleContinue} />

// Disabled button
<Button label="Coming Soon" variant="primary" disabled />

// Loading button
<Button label="Processing..." variant="primary" loading />
```

## CSS Variable Naming Convention

All design tokens follow a consistent naming pattern:

```
--button-{property}-{variant}-{state}
```

Examples:
- `--button-typography-base-size`: Base font size
- `--button-primary-bg-default`: Primary variant default background
- `--button-secondary-text-hover`: Secondary variant hover text color
- `--button-min-height-base`: Base button height

## Maintenance

When updating design tokens:

1. Update the values in `src/components/buttons/Button.css`
2. Maintain the CSS variable naming convention
3. Update this documentation with new token values
4. Ensure all color contrast ratios meet WCAG AA standards (4.5:1 for text)
5. Test changes in all button variants and states

## Design System Alignment

The Button component is fully aligned with the Figma Phoenix System design tokens, ensuring:

- **Single Source of Truth**: All values come from Figma
- **Consistency**: All buttons use the same token values across the application
- **Maintainability**: Easy to update all buttons by changing token values
- **Accessibility**: Proper color contrast and focus states
- **Scalability**: CSS variables make it simple to add new variants or states
