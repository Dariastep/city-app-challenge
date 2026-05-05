## City App

This application displays a list of cities and their details.
It is built using Angular for the frontend and Node.js for the backend API.
The project is structured as a Nx monorepo.

## Tech Stack

### Frontend

Angular, TypeScript

### Backend

NestJS, Node.js, TypeScript – Shared language across backend for consistency and type safety

### API & Documentation

REST API, Swagger (OpenAPI)

### Architecture

Monorepo (Nx), Modular architecture (Separation of concerns (Controller → Service → Repository pattern), Shared libraries

### Development Tools

ESLint, Prettier, Jest – Unit tests (NestJS & Angular)

## 🚀 Quick Start

### Install dependencies

npm install

### Serve the Angular cities application (this will simultaneously serve the API backend)

npx nx serve app

### ...or you can serve the API separately

npx nx serve server

### Build all projects

npx nx run-many -t build

### Run tests

npx nx run-many -t test

### Lint all projects

npx nx run-many -t lint

### Visualize the project graph

npx nx graph

## 📁 Project Structure

```
├── apps/
│   ├── client/                 # Angular Frontend Application
│   │   ├── src/app/
│   │   │   ├── components/     # UI Components (city-card, city-details, city-list)
│   │   │   └── services/       # city-api.service.ts
│   │   └── ...
│   └── server/                 # NestJS Backend Application
│       ├── src/app/
│       │   ├── cities/         # City Domain Logic
│       │   │   ├── dto/        # Data Transfer Objects (e.g., GetCitiesFilterDto)
│       │   │   └── models/     # Backend-specific models/interfaces
│       │   ├── controllers/    # API Endpoints
│       │   └── services/       # Business logic (CityService)
│       └── assets/             # Static assets (cities.json)
├── lib/
│   └── shared/
│       └── models/      [scope:shared,type:data] - Shared models
        └── mappers/     [scope:shared,type:data] - Shared mappers
├── nx.json             - Nx configuration
├── tsconfig.json       - TypeScript configuration
└── eslint.config.mjs   - ESLint with module boundary rules
```
