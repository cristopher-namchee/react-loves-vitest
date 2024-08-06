# Testing React components with Vitest

> Based on [Robin Weruch's blog post](https://www.robinwieruch.de/vitest-react-testing-library/)

Example of testing React-based applications with [Vitest](https://vitest.dev/) and [`testing-library`](https://testing-library.com/docs/react-testing-library/setup/).

Project is bootstrapped with `create-vite-app`.

## Dependencies

```bash
vitest # duh!!
@vitejs/plugin-react # Enable React in Vite
jsdom # DOM manipulation for Vitest
@testing-library/jest-dom # to manipulate DOM using testing libraries, yes it has *jest* on it
@testing-library/react # Enable React in testing framework
@testing-library/user-event # Simulate user's events like click

```

## Important Files

- `vitest.config.ts` -> Configuration file for running React in Vitest
- `test-setup.ts` -> Setup file
- `App.spec.tsx` -> The actual test file
