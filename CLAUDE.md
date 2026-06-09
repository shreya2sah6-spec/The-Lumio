This project originated from Figma Make.

Primary goal:
Preserve the exact visual identity and UX structure.

DO NOT:

redesign layouts
alter spacing systems
change typography hierarchy
replace visual patterns unnecessarily
introduce new design languages

Priority:

Preserve visual fidelity
Match Figma MCP references
Improve consistency
Improve responsiveness
Reduce duplication carefully

Guidelines:

Reuse existing UI patterns
Preserve current navigation
Preserve component behavior
Preserve layout hierarchy
Preserve visual rhythm

When refactoring:

make incremental changes only
avoid large rewrites
avoid architecture overhauls unless explicitly requested

Use Figma MCP as the visual source of truth.

Engineering Rules
Core Architecture

Maintain a modular monorepo structure.

Repository organization:

apps/web → frontend application
packages/ui → shared UI components
packages/core → business logic
packages/types → shared TypeScript types
packages/config → shared configs/utilities

Keep business logic outside UI components whenever possible.

Avoid tightly coupling UI to backend implementations.

Tech Stack

Use:

Next.js
TypeScript
Tailwind CSS
Zustand
Supabase
Turborepo

Prefer existing stack choices over introducing new libraries.

Do not introduce heavy dependencies unless necessary.

TypeScript Standards
Use strict typing
Avoid any
Prefer explicit interfaces/types
Reuse shared types from packages/types
Keep type definitions centralized
State Management

Use Zustand consistently.

Rules:

Keep global state minimal
Prefer local component state when possible
Separate UI state from business state
Avoid deeply nested stores
Component Rules

Prefer:

small reusable components
composition over duplication
isolated UI primitives
reusable hooks

Avoid:

giant page components
duplicated logic
inline complex business logic
Performance Rules

Optimize for:

fast initial load
responsive interactions
minimal rerenders
code splitting where appropriate

Avoid unnecessary client-side rendering.

Prefer server components when possible.

Refactoring Rules

Before changing architecture:

analyze existing patterns
preserve compatibility
avoid breaking UX behavior
make incremental improvements

Never perform large rewrites unless explicitly requested.

Workflow Rules

Before implementation:

review existing components
check for reusable patterns
preserve visual fidelity
maintain existing UX behavior

When uncertain:
Preserve current implementation rather than redesigning.

Source of Truth

Priority order:

Existing product UX
Figma MCP references
Existing component behavior
Current architecture patterns
New optimizations

The existing product experience is more important than introducing new patterns.

Important

Always read PROJECT_MEMORY.md before implementing major changes.

Do not make large architectural changes without explicit approval.