# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs prisma db push and generate)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Code Style
- **TypeScript**: Strict mode enabled, use type annotations
- **Formatting**: Prettier with 2-space indentation, single quotes, no semicolons
- **Imports**: Use absolute imports with `@/` alias for project root
- **Components**: React functional components with explicit type definitions
- **Naming**: CamelCase for variables/functions, PascalCase for components/types
- **Forms**: Use react-hook-form with zod validators
- **Errors**: Handle errors with try/catch, use toast notifications with sonner
- **CSS**: Use Tailwind with class-variance-authority for component variants
- **i18n**: Use next-intl for internationalization
- **State**: Store shared state in context providers
- **Database**: Use Prisma for database operations