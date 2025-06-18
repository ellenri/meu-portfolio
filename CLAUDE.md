# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Angular 18 and Server-Side Rendering (SSR). The application uses standalone components and follows a single-page application architecture without routing.

## Development Commands

- **Start development server**: `ng serve` or `npm start` (runs on http://localhost:4200)
- **Build for production**: `ng build` 
- **Run tests**: `ng test` (uses Karma/Jasmine)
- **Build and watch**: `ng build --watch --configuration development`
- **Start SSR server**: `npm run serve:ssr:meu-portfolio` (serves from dist/, runs on port 4000)

## Architecture

The application uses a component-based architecture with all components declared as standalone:

- **App Component** (`src/app/app.component.ts`): Root component that imports and displays all page sections
- **Header Component**: Navigation/header section
- **Inicio Component**: Hero/landing section with interactive elements
- **Sobre Component**: About section
- **Projetos Component**: Projects showcase section
- **Footer Component**: Footer section

All components are directly imported and used in the main AppComponent template - there is no routing configured.

## Key Technical Details

- **Framework**: Angular 18 with SSR enabled
- **Styling**: Component-scoped CSS files
- **Server**: Express.js server for SSR (server.ts)
- **TypeScript**: Strict mode enabled with comprehensive compiler options
- **Assets**: Stored in `public/` directory
- **Build Output**: Generated in `dist/meu-portfolio/`

## Component Structure

Components follow Angular standalone pattern:
- Each component has its own `.ts`, `.html`, `.css`, and `.spec.ts` files
- Components are imported directly in AppComponent without module declarations
- All components use `standalone: true` configuration

## SSR Configuration

The project includes full SSR setup:
- Server entry point: `src/main.server.ts`
- Express server: `server.ts`
- Prerendering enabled by default
- Static file serving configured for production