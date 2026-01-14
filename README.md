# New Project

> Created with [Shape.town](https://shape.town) — the premier AI coding platform that brings ideas to life.

## About This Project

This project was built using Shape.town's AI coding assistant, Ally. Shape.town provides an integrated development environment where you can describe what you want to build and watch it come to life in real-time.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework with hooks |
| Vite | 7 | Build tool + HMR |
| TypeScript | 5.9 | Strict type checking |
| Tailwind CSS | 4 | Utility-first styling |
| Radix UI | Latest | Accessible primitives |
| Lucide React | Latest | Icon library |

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Project Structure

- `src/app.tsx` — Main application with routing
- `src/components/ui/` — Reusable UI components (Button, Card, Input, etc.)
- `src/components/providers/` — Theme and context providers
- `src/lib/utils.ts` — Utility functions including `cn()` for classNames
- `src/styles/global.css` — Tailwind configuration and CSS variables

## Working Principles

This codebase follows principles designed for clarity and maintainability:

### Eliminate Unknowns
Before making changes, understand the existing patterns. Read the code, check how similar features are implemented, and ensure your approach aligns with what's already established.

### Quality Over Quantity
One polished feature is worth more than three half-done ones. Every component should handle all states: loading, empty, error, and success. Both light and dark themes must work correctly.

### DRY (Don't Repeat Yourself)
Shared logic belongs in dedicated utility files. If you find yourself writing similar code in multiple places, extract it into a reusable function or component.

### Accessibility First
All interactive elements must be keyboard accessible. Use semantic HTML. Ensure sufficient color contrast. The Radix UI primitives handle most ARIA requirements automatically.

## Contributing

### Code Style
- TypeScript strict mode is enabled — no `any` types
- Use `cn()` from `@/lib/utils` for conditional classNames
- Keep components focused and under 100 lines when possible
- Handle all UI states (hover, focus, active, disabled)

### Commit Messages
Write clear, descriptive commit messages that explain *why* the change was made:

- `feat: add user profile page with avatar upload`
- `fix: resolve form validation on empty email`
- `refactor: extract date formatting to shared utility`
- `style: improve button hover states for accessibility`

### Before Committing
1. Run `npm run build` to check for TypeScript errors
2. Test both light and dark themes
3. Verify the feature works as expected in the preview

## Quality Standards

- **TypeScript**: Strict mode enabled, no implicit any
- **Accessibility**: WCAG AA compliant, keyboard navigable
- **Theming**: CSS variables for consistent light/dark modes
- **Performance**: Lazy loading for heavy components

---

*Built with [Shape.town](https://shape.town) — Where ideas become reality.*
