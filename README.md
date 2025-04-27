## Environments

| Environment | Branch  | URL                   |
| ----------- | ------- | --------------------- |
| Local       | main    | http://localhost:3000 |
| Staging     | develop | [URL]                 |
| Production  | main    | [URL]                 |

# Next TodoList

## Getting started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm v8.x or later recommended

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:pstachula-dev/next-todo-app.git
   cd next-todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env.local` and update the environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application.

## Scripts

- `dev`: Start the development server using Vite
- `build`: Compile TypeScript and build the application for production
- `test`: Run tests with Vitest in watch mode
- `start`: Start the production server
- `lint`: Run ESLint to check code quality
- `format`: Run Prettier to format code

## Technology Stack

### Core Technologies

- React 19: For building user interfaces
- TypeScript: For type-safe code
- Next.js: For fast development and optimized builds

### Testing

- Jest
- React Testing Library

### Code Quality

- ESLint
- Prettier

### Project Structure Recommendations

- Use a consistent naming convention for files and directories.
- Keep related files together in the same directory.
- Use meaningful names for variables and functions.
- Use comments to explain complex logic.

### File Naming Conventions

- Use PascalCase for React components.
- Use kebab-case for non-component files and directories.

### App structure

```
src/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Root page
│   └── layout.tsx                # Root layout
├── libs/                         # Core libraries
│   └── api-client/               # API integration
├── modules/                      # Feature modules
│   └── TodoList/                 # Example module
└── utils/                        # Utilities
    └── helpers/                  # Helper functions
```

## Module structure

```
ModuleName/
├── ModuleName.tsx                # Main component
├── components/                   # Sub-components
│   ├── ModuleContent.tsx         # Main content component
│   └── ...                       # Other sub-components
├── hooks/                        # Custom hooks
│   └── useModuleLogic.ts         # Business logic
└── tests/                        # Tests for components and hooks
    └── ModuleName.test.tsx       # Main component tests
```

## CI/CD

### Pull Request Creation:

TODO...

### Merging the Pull Request:

TODO...

### Production Deployment:

TODO...
