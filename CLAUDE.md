# Claude Configuration - Hello World Component System

This is a React component system project integrated with the Phoenix Design System and Figma Code Connect.

## Project Overview

This project builds a reusable component library using:
- **React 18** with TypeScript
- **Phoenix Design System** (design tokens in CSS variables)
- **Figma Code Connect** for design-to-code synchronization
- **Figma MCP Server** for direct Figma API access via Claude
- **@ansira/ui-kit** web components library
- **@ansira/style-foundation** for design tokens
- **Azure DevOps** private npm registry for @ansira packages

## Figma MCP Server Integration

This project is configured with the Figma MCP (Model Context Protocol) server, which allows Claude to directly access Figma files and extract design information.

### Configuration

The Figma MCP server is configured in `.mcp.json` with:
- Server: `@modelcontextprotocol/server-figma`
- Authentication: Figma Personal Access Token (PAT)
- **Security**: This file is excluded from git via `.gitignore`
- **Activation**: Set `enableAllProjectMcpServers: true` in `~/.claude/settings.json` to auto-approve project MCP servers

### Available Capabilities

With the Figma MCP server, Claude can:
- ✅ Read Figma file structure and component details
- ✅ Extract design properties (colors, spacing, typography)
- ✅ Get component variants and properties
- ✅ Access node-specific information
- ✅ Retrieve design tokens from Figma files

### Main Figma File

**Phoenix Component Library**
- URL: `https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library`
- Contains all design system components
- Source of truth for component specifications

### Using Figma Data in Development

When creating a new component:

1. **Ask Claude to inspect the Figma component** by providing the Figma URL with node-id
2. Claude will extract:
   - Component properties and variants
   - Design tokens (colors, spacing, typography)
   - States (default, hover, active, disabled, etc.)
   - Size options
3. **Use the extracted data** to create matching React component props
4. **Map properties** in the Figma Code Connect file to keep design and code synchronized

### Example Workflow

```
User: "Create a component based on this Figma design:
https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=5399-78716"

Claude (using Figma MCP):
1. Fetches component data from Figma
2. Analyzes properties and variants
3. Creates React component with matching props
4. Generates CSS using extracted design tokens
5. Creates Figma Code Connect mapping
```

### Security Note

- The Figma PAT token is stored in `.mcp.json`
- This file is **excluded from git** via `.gitignore`
- Never commit the `.mcp.json` file
- To share the project, others need to:
  1. Create their own `.mcp.json` with their Figma PAT
  2. Enable project MCP servers in `~/.claude/settings.json` with `enableAllProjectMcpServers: true`

## Architecture

### Component Structure
```
src/components/
├── [component-name]/
│   ├── [ComponentName].tsx       # Main React component
│   ├── [ComponentName].css       # Styles using Phoenix tokens
│   ├── [ComponentName].figma.tsx # Figma Code Connect mapping
│   └── index.ts                  # Exports
```

### Design System Integration
- All components use Phoenix Design System tokens from `src/styles/variables.css`
- Tokens follow the pattern: `--ph-[category]-[property]-[variant]`
- Examples: `--ph-color-primary-500`, `--ph-spacing-16`, `--ph-radius-2`

## Development Guidelines

### Creating New Components

1. **Create component directory** in `src/components/[component-name]/`

2. **Main Component File** (`[ComponentName].tsx`):
   ```tsx
   import React from 'react';
   import './[ComponentName].css';

   interface [ComponentName]Props {
     // Props that match Figma component properties
   }

   const [ComponentName]: React.FC<[ComponentName]Props> = ({
     // implementation
   }) => {
     return (/* JSX */);
   };

   export default [ComponentName];
   ```

3. **CSS Styling** (`[ComponentName].css`):
   - Always use Phoenix Design System tokens
   - Follow BEM naming: `.component`, `.component__element`, `.component--modifier`
   - Include smooth transitions: `transition: var(--ph-duration) var(--ph-easing)`

4. **Figma Code Connect** (`[ComponentName].figma.tsx`):
   ```tsx
   import figma from "@figma/code-connect";
   import [ComponentName] from "./[ComponentName]";

   figma.connect(
     [ComponentName],
     "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=XXX-XXX",
     {
       props: {
         // Map Figma properties to component props
         propName: figma.enum("FigmaPropertyName", {
           "Figma Option": "componentValue",
         }),
       },
       example: (props) => (
         <[ComponentName] {...props} />
       ),
     }
   );
   ```

5. **TypeScript Definitions** for Web Components:
   - Update `src/types/web-components.d.ts` if creating web components
   - Add interface extending `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>`

### Component Examples in App.tsx
When creating a new component, always add comprehensive examples in `App.tsx` showing:
- All variants/types
- All sizes
- Different states (disabled, loading, etc.)
- Different configurations

## NPM & Package Management

### Azure DevOps Private Registry
The project uses Azure DevOps for @ansira packages:
- Registry: `https://pkgs.dev.azure.com/BrandMuscle/Node/_packaging/NodePackages/npm/registry/`
- Authentication configured in `.npmrc` (DO NOT commit this file - it's in .gitignore)
- Public packages still come from npmjs.org

### Installing Packages
```bash
# Regular npm packages
npm install <package-name>

# @ansira packages (require authentication)
npm install @ansira/<package-name>
```

### Authentication Issues
If you see "Access token expired", the user needs to provide a new PAT token. The token should be base64 encoded and added to `.npmrc`.

## Common Commands

```bash
# Development
npm start                  # Start dev server (localhost:3000)
npm run build             # Production build
npm test                  # Run tests

# Figma Code Connect
npm run figma:connect     # Preview Code Connect locally
npm run figma:publish     # Publish Code Connect to Figma
```

## Code Style & Conventions

### React Components
- Use functional components with TypeScript
- Use React.FC for component typing
- Prefer named exports for main component
- Include comprehensive JSDoc comments for props

### CSS
- Use BEM naming convention
- Mobile-first responsive design
- Always use Phoenix tokens, never hardcoded values
- Include hover, focus, active, and disabled states

### File Naming
- Components: PascalCase (e.g., `Button.tsx`, `Tooltip.tsx`)
- CSS files: Match component name (e.g., `Button.css`)
- Index files: lowercase `index.ts`

### TypeScript
- Enable strict mode (already configured)
- Avoid `any` types - use proper typing
- Use enums or union types for variants

## Phoenix Design System Tokens

### Common Token Categories

**Colors:**
- `--ph-color-primary-[50-900]` - Primary brand colors (purple)
- `--ph-color-slate-[50-950]` - Neutral grays
- `--ph-color-text-[primary|secondary|muted|inverted|disabled]`
- `--ph-color-background-[page|surface]`
- `--ph-color-border-[default|subtle|strong]`

**Spacing:**
- `--ph-spacing-[0|2|4|8|12|16|20|24|28|32|36|40|44|48|56|64|80|96]`

**Typography:**
- `--ph-typography-[display|heading|body|label]-[xl|lg|md|base|sm|xs]`
- `--ph-font-size-[1-8]`
- `--ph-font-line-height-[1-5]`

**Border Radius:**
- `--ph-radius-[0|1|2|3|4|5|full]`
- Named: `--ph-radius-[small|medium|rounded]`

**Shadows:**
- `--ph-shadow-[0|1|2|3|4|focus]`
- Semantic: `--ph-elevation-[none|low|medium|high]`

**Transitions:**
- `--ph-duration` (200ms)
- `--ph-easing` (cubic-bezier)

### Button-Specific Tokens
- `--ph-button-height-[sm|base|lg]`
- `--ph-button-[variant]-background-color-[state]`
- `--ph-button-[variant]-text-color-[state]`
- `--ph-button-padding-[size]-x`

## Git Workflow

### Committing
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, etc.
- Never commit `.npmrc` (contains credentials)
- Never commit `.env` files
- Always include `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

### .gitignore Essentials
- `node_modules/`
- `.npmrc`
- `.env*`
- `build/`
- `dist/`

## Troubleshooting

### Build Errors
1. Check TypeScript errors: `npx tsc --noEmit`
2. Clear cache: `rm -rf node_modules && npm install`
3. Check for missing imports

### NPM Authentication
If @ansira packages fail to install:
1. User needs valid Azure DevOps PAT
2. Token must have "Packaging (Read)" permissions
3. Update `.npmrc` with base64-encoded token

### Figma Code Connect
- Ensure `FIGMA_TOKEN` environment variable is set for publishing
- Check node-id in Figma URL matches the Code Connect mapping
- Run `npm run figma:connect` to preview locally before publishing

## Testing Checklist for New Components

- [ ] Component builds without errors
- [ ] All props work as expected
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility (ARIA labels, keyboard navigation)
- [ ] All states render correctly (hover, focus, active, disabled)
- [ ] Uses only Phoenix Design System tokens
- [ ] Figma Code Connect mapping created
- [ ] Examples added to App.tsx
- [ ] TypeScript definitions updated (if web component)

## Project Goals

1. **Consistency**: All components follow the same patterns and use Phoenix tokens
2. **Design-Code Sync**: Figma Code Connect keeps design and code aligned
3. **Reusability**: Components are modular and can be used across projects
4. **Type Safety**: Full TypeScript coverage with strict mode
5. **Accessibility**: All components meet WCAG 2.1 AA standards
6. **Performance**: Optimized bundles, lazy loading where appropriate

## Current Component Inventory

### React Components
- **Button** (`src/components/buttons/`) - Phoenix design system button with variants
- **Tooltip** (`src/components/tooltip/`) - Configurable tooltip with positions and themes
- **Input** (`src/components/inputs/`) - Form input component
- **Card** (`src/components/design/`) - Content wrapper
- **Container** (`src/components/design/`) - Layout component

### Web Components (from @ansira/ui-kit)
- **liva-button** - Web component button (used in App.tsx)

## Notes

- Project uses `react-scripts@5.0.0` (has some security vulnerabilities in dev dependencies - acceptable for now)
- Development server runs on `http://localhost:3000`
- Network access available for testing on local network
- Baseline browser mapping data is slightly outdated (non-critical warning)
