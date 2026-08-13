# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Day 1 — JSX, Components, Rendering

## What I learned
- JSX compiles down to `React.createElement()` calls
- Components are just functions returning JSX
- `className` instead of `class`, self-closing tags required
- `{ }` embeds JS expressions (not statements) in JSX

## What I built
- `ProfileCard` component rendering hardcoded name/bio/avatar
- Rendered 3 instances in `App.jsx`

## Bug I hit
Blank screen on localhost:5173 — turned out to be the component name was misspelled.
Lesson: always check the browser console first.

# Day 2 — Props & Component Composition

## What I learned
- Props pass data from parent to child components, like function arguments
- Destructuring props in the function signature (`{ name, role }`) instead of writing `props.name` everywhere
- Props are read-only — a component can never modify the props it receives (one-way data flow: "data down, actions up")
- `children` is a special prop — whatever's nested between a component's opening/closing tags
- Conditional rendering with ternaries (`condition ? a : b`) and `&&` (`condition && <Element />`)
- Gotcha: `count && <Element />` renders a stray `0` on screen if `count` is `0`, since React renders `0` but not `false`/`null`/`undefined`. Fix: use `count > 0 && <Element />`.

## What I built
- Refactored `ProfileCard` to accept `name`, `role`, `isOnline` as props instead of hardcoded values
- Moved card data into a `people` array in `App.jsx`, rendered via `.map()` with `key={person.id}`
- Built a reusable `Badge` component using `children`, used it for an "Online" status indicator

