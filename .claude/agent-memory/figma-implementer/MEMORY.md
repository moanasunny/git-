# Figma Implementer Memory

## Project: ai_claude

### Known Pre-existing Issues (do not try to fix)

- `@testing-library/react` is NOT installed. Logo.test.tsx has this bug already. Write test files without this import.
- `style-dictionary build` throws TypeError on `npm run build` — pre-existing issue, unrelated to components.
- `npm run typecheck` (tsc --noEmit) passes due to skipLibCheck, even when npx tsc -b shows errors in Logo/main.tsx.

### Test File Pattern

- Do NOT import from `@testing-library/react` — it is not installed.
- Use `vitest` imports only: `import { describe, it, expect } from "vitest"`
- For component rendering tests, prefer logic/type-level tests with vitest only.
- See: `src/components/ui/Icon/Icon.test.tsx` for working pattern.

### Stories File Pattern

- When `name` prop is required, add `args` to meta-level AND to every render-only Story.
- See: `src/components/ui/Logo/Logo.stories.tsx` for reference pattern.

### Figma MCP Notes

- Section nodes (2111:5743) return sparse metadata — must call get_design_context on child nodes individually.
- Starter plan has limited MCP calls (~5-6 per session). Prioritize key variant nodes.
- Icon SVGs from Figma come as image assets (PNG/SVG URLs, expire in 7 days). Use inline SVG paths instead.

### Token Usage

- Icon color: use `--icon-black`, `--icon-grey`, `--icon-accent`, etc. (semantic tokens)
- Spacing: `--spacing-xxs` (4px) through `--spacing-3xl` (40px)
- Font size: `--font-size-12`, `--font-size-13`, `--font-size-15`, `--font-size-17`
