# Quick Reference: Button Component

## Color Variants at a Glance

### 🟣 Primary (Vivid Purple)
Main call-to-action button
- **Default**: #3d0fdc (purple)
- **Hover**: #300cac (darker purple)
- **Active**: #23087c (darkest purple)
- Text: #ffffff (white)

### ⚪ Secondary (Purple Text/Border)
Secondary actions
- **Default**: #ffffff (white bg) with #5b2ff1 (purple border & text)
- **Hover**: #f0ecfe (light purple bg) with #3d0fdc (darker purple)
- **Active**: #cabcfa (medium purple bg) with #23087c (darkest purple)

### ⬜ Tertiary (Gray)
Subtle/low emphasis actions
- **Default**: #ffffff (white bg) with #475569 (slate gray text), #94a3b8 border
- **Hover**: #e2e8f0 (light gray bg)
- **Active**: #cbd5e1 (medium gray bg) with #334155 (darker gray)

### 👻 Ghost (Transparent)
Minimal appearance
- **Default**: Transparent with #475569 (slate gray text)
- **Hover**: #334155 (darker gray text)
- **Active**: #3d0fdc (purple text)
- Always transparent background

### 🔴 Destructive (Red)
Dangerous/destructive actions
- **Default**: #ef4444 (bright red)
- **Hover**: #dc2626 (darker red)
- **Active**: #b91c1c (darkest red)
- Text: #ffffff (white)

## All Sizes

| Size     | Height | Font Size | X Padding | Y Padding |
|----------|--------|-----------|-----------|-----------|
| Small    | 32px   | 14px      | 12px      | 4px       |
| Default  | 40px   | 16px      | 16px      | 8px       |
| Large    | 48px   | 18px      | 20px      | 12px      |

## CSS Classes

```
.btn                    /* Base button */
.btn--primary           /* Primary variant */
.btn--secondary         /* Secondary variant */
.btn--tertiary          /* Tertiary variant */
.btn--ghost             /* Ghost variant (NEW!) */
.btn--destructive       /* Destructive variant */
.btn--small             /* Small size */
.btn--default           /* Default size */
.btn--large             /* Large size */
.btn--rounded           /* Rounded corners (20px) */
.btn--disabled          /* Disabled state */
.btn--loading           /* Loading state */
```

## Usage Examples

```tsx
import { Button } from './components';

// Primary - Main action (default)
<Button label="Save" onClick={handleSave} />

// Secondary - Alternative action
<Button label="Edit" variant="secondary" onClick={handleEdit} />

// Tertiary - Subtle action
<Button label="Learn more" variant="tertiary" onClick={handleLearnMore} />

// Ghost - Minimal action (NEW!)
<Button label="Skip" variant="ghost" onClick={handleSkip} />

// Destructive - Delete/remove
<Button label="Delete" variant="destructive" onClick={handleDelete} />

// Sizes
<Button label="Small" size="small" />
<Button label="Default" size="default" />
<Button label="Large" size="large" />

// Rounded
<Button label="Rounded" rounded />

// With icon
<Button label="Save" icon="💾" />

// Disabled
<Button label="Disabled" disabled />

// Loading
<Button label="Saving..." loading />

// Custom styling
<Button label="Custom" className="my-custom-class" />
```

## States

All variants support these states:
- **Default** - Normal appearance
- **Hover** - Mouse over (color changes)
- **Active** - Pressed (darker color)
- **Focus** - Keyboard focus (outline)
- **Disabled** - Not clickable (#e2e8f0 bg, #64748b text)

## Special States

- **Loading** - Shows spinner, prevents clicks
- **Rounded** - 20px border radius (vs default 4px)
- **Grouped** - Can be placed side-by-side with gap

## Typography

- **Font**: Inter
- **Weight**: 500 (Medium)
- **Line Height**: 1.2
- **Sizes**: 14px (small), 16px (default), 18px (large)

## Accessibility

✅ Proper color contrast (WCAG AA compliant)
✅ Focus visible outline
✅ Disabled state cursor change
✅ Keyboard navigation support
✅ ARIA attributes (aria-busy for loading)
✅ Semantic HTML button elements

## Design System Source

All values sourced from: **Figma Phoenix System Tokens**
Last Updated: 2024

---

**Need the full reference?** See `DESIGN_TOKENS.md` for complete token documentation.
