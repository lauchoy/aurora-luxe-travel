# Contributing to Aurora Luxe Travel

Thank you for your interest in contributing to Aurora Luxe Travel! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## Code of Conduct

We expect all contributors to adhere to our code of conduct:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive criticism
- Assume good intentions

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aurora-luxe-travel.git
   cd aurora-luxe-travel
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/lauchoy/aurora-luxe-travel.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Keep your fork synced** with upstream:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Make your changes** following our coding standards

4. **Test your changes** thoroughly

5. **Commit your changes** using conventional commits

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** on GitHub

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Define proper types and interfaces
- Avoid using `any` type
- Use type inference where appropriate

### React/Next.js

- Use functional components with hooks
- Follow React best practices
- Use Next.js App Router conventions
- Implement proper error boundaries
- Optimize for performance (lazy loading, memoization)

### Styling

- Use Tailwind CSS utility classes
- Follow the design system defined in `tailwind.config.ts`
- Use the `cn()` utility for conditional classes
- Prefer composition over custom CSS

### Code Organization

```
src/app/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utilities, types, constants
└── (routes)/      # App Router pages
```

### Naming Conventions

- **Components**: PascalCase (`Button.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Hooks**: camelCase with `use` prefix (`useMediaQuery.ts`)
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase

### File Structure

```typescript
// 1. Imports
import type { FC } from 'react';
import { useState } from 'react';

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
export function Component({ ...props }: ComponentProps) {
  // ...
}
```

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(destinations): add destination filtering
fix(booking): resolve date picker issue
docs(readme): update installation instructions
style(components): format button component
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all checks pass**:
   - Linting: `npm run lint`
   - Type checking: `npm run type-check`
   - Formatting: `npm run format:check`
4. **Provide a clear description** of your changes
5. **Link related issues** using keywords (fixes #123)
6. **Request review** from maintainers
7. **Address feedback** promptly

### PR Title Format

```
type(scope): brief description
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run test coverage
npm run test:coverage
```

### Writing Tests

- Write tests for all new features
- Update tests when modifying existing code
- Aim for high test coverage
- Test edge cases and error scenarios

## Questions?

If you have questions:

1. Check existing issues and discussions
2. Review the documentation
3. Open a new issue with the `question` label

Thank you for contributing to Aurora Luxe Travel! 🎉
