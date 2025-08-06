# Frontend Boilerplate

A modern React + TypeScript + Vite boilerplate with authentication, routing, and UI components.

## Author

Vignesh T.V (https://github.com/tvvignesh)

## License

Copyright © 2025 Burdenoff, Algoshred and all its sister companies. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and better DX
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧩 **Radix UI** - Accessible component primitives
- 🔐 **Authentication** - JWT-based auth with refresh tokens
- 🚦 **React Router** - Client-side routing
- 📦 **Zustand** - Lightweight state management
- 🎯 **React Hook Form** - Performant forms with validation
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🧪 **Vitest** - Fast unit testing
- 🌙 **Dark Mode** - Built-in theme support

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Getting Started

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your API URL:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Base UI components
│   ├── auth/           # Authentication components
│   └── common/         # Shared components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services
├── lib/               # Utility functions
├── types/             # TypeScript types
├── styles/            # Global styles
└── config/            # Configuration files
```

## Key Technologies

### Frontend Framework
- **React 19** with Concurrent Mode
- **TypeScript** for type safety
- **Vite** for blazing fast HMR

### Styling
- **TailwindCSS** for utility-first styling
- **Radix UI** for accessible components
- **class-variance-authority** for component variants
- **tailwind-merge** for className conflicts

### State Management
- **Zustand** for global state
- **React Context** for theme and auth
- **React Hook Form** for form state

### Development Tools
- **ESLint** with React and TypeScript rules
- **Prettier** for code formatting
- **Vitest** for unit testing

## Authentication

The boilerplate includes a complete authentication system:

- JWT-based authentication
- Protected routes
- Auth context and hooks
- Login/logout flows
- Persistent sessions

### Using Authentication

```typescript
import { useAuth } from '@/contexts/auth-context';

function MyComponent() {
  const { user, login, logout } = useAuth();
  
  if (!user) {
    return <div>Please log in</div>;
  }
  
  return <div>Welcome, {user.name}!</div>;
}
```

## Theme Support

Built-in dark/light mode with system preference detection:

```typescript
import { useTheme } from '@/contexts/theme-context';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

## UI Components

Pre-built accessible components using Radix UI:

- Button
- Input
- Label
- Dialog
- Dropdown Menu
- Select
- Switch
- Tabs
- Tooltip

## API Integration

Configured Axios instance with interceptors:

```typescript
import { api } from '@/services/api';

// Automatically includes auth token
const response = await api.get('/users');
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000/api` |

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Code Quality

The project uses ESLint and Prettier for code quality:

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## VS Code Integration

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

## Troubleshooting

### Port already in use
Change the port in `vite.config.ts`:
```typescript
server: {
  port: 5174, // Change to another port
}
```

### TypeScript errors
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

### Clear cache
```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

This is proprietary software. Contributing is limited to authorized personnel only.

## Support

For support, please contact the development team at Burdenoff/Algoshred.