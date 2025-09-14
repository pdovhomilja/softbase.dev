# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs prisma db push and generate)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview
- **Framework**: Next.js 14 with App Router using file-based routing
- **Internationalization**: next-intl with locale-based routing (`[locale]` segments)
- **Database**: Prisma ORM with PostgreSQL, includes visitor tracking and lead management
- **Authentication**: Supabase Auth with SSR middleware integration
- **Content Management**: Contentlayer for MDX processing (terms/legal content)
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables and custom animations

## Project Structure
- `app/[locale]/(marketing)/` - Main marketing pages with locale support
- `components/ui/` - Reusable UI components based on shadcn/ui
- `lib/` - Utility functions, Prisma client, and safe actions
- `prisma/schema.prisma` - Database schema with visitor and lead tracking models
- `content/` - MDX content processed by Contentlayer
- `messages/` - Internationalization message files (en.json, cs.json)

## Key Technologies
- **Locales**: English (en) and Czech (cs) with localized pathnames
- **Lead Tracking**: Automatic visitor IP tracking with company enrichment
- **Email**: Resend integration for transactional emails
- **Analytics**: PostHog integration for user tracking
- **UI Components**: Tremor for data visualization, Framer Motion for animations

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