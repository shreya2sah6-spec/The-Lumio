# PROJECT_MEMORY.md

# Lumio Project Memory

## Product Overview

Lumio is an AI-powered collaborative workspace focused on modern productivity, design fidelity, intelligent workflows, and scalable architecture.

The product prioritizes:

* clean UX
* fast interactions
* modular architecture
* reusable systems
* high visual fidelity
* scalable frontend patterns

---

# Product Goals

Primary goals:

1. Build a production-grade AI workspace
2. Maintain excellent UI/UX consistency
3. Preserve Figma-based visual fidelity
4. Keep architecture scalable and modular
5. Support rapid iteration without large rewrites

---

# Core UX Principles

* Minimal modern interface
* Consistent spacing and typography
* Fast responsive interactions
* Keyboard-friendly workflows
* Reusable UI patterns
* Predictable navigation
* Smooth animations only where useful

Avoid unnecessary visual complexity.

---

# Tech Stack

Frontend:

* Next.js
* TypeScript
* Tailwind CSS
* Zustand

Backend:

* Supabase

Architecture:

* Turborepo monorepo

---

# Repository Structure

* apps/web → main frontend app
* packages/ui → shared design system
* packages/core → business logic
* packages/types → shared TypeScript types
* packages/config → shared configuration/utilities

---

# Important Engineering Rules

* Preserve existing UX patterns
* Avoid unnecessary rewrites
* Prefer incremental refactoring
* Keep APIs backward compatible
* Reuse components before creating new ones
* Keep business logic outside UI components
* Prefer composition over duplication

---

# Design Rules

Figma MCP is the visual source of truth.

Do not:

* redesign layouts
* alter spacing systems
* change typography hierarchy
* replace visual patterns unnecessarily

Preserve:

* visual rhythm
* layout hierarchy
* navigation behavior
* existing interaction patterns

---

# State Management Rules

Use Zustand consistently.

Guidelines:

* Keep global state minimal
* Use local state when appropriate
* Separate UI state from business state
* Avoid deeply nested stores

---

# Performance Priorities

Optimize for:

* fast page loads
* low rerender counts
* responsive UI
* efficient client/server boundaries

Prefer:

* server components where appropriate
* lazy loading
* modular imports

Avoid unnecessary client-side rendering.

---

# Current Priorities

Current focus areas:

* scalable architecture
* reusable component systems
* responsive UI refinement
* AI workflow integration
* reducing technical debt safely

---

# Refactoring Philosophy

Refactor incrementally.

Never perform:

* massive rewrites
* large architecture overhauls
* design system replacements

unless explicitly requested.

---

# Decision Log

## Decision 001

Use Turborepo monorepo structure.

Reason:
Shared UI and business logic across apps.

---

## Decision 002

Use Zustand instead of Redux.

Reason:
Simpler state management and lower boilerplate.

---

## Decision 003

Preserve Figma fidelity over introducing new design systems.

Reason:
Maintain consistent product identity.

---

# Notes For Future Sessions

Before implementing:

1. Review existing architecture
2. Reuse existing patterns
3. Preserve visual consistency
4. Avoid unnecessary abstractions

When uncertain:
Prefer preserving current behavior over redesigning.
