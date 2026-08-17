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

# Day 3 — State & Events

## What I learned
- `useState` creates a state variable that persists across renders and triggers a re-render when updated
- `const [value, setValue] = useState(initial)` — array destructuring, returns the current value + an updater function
- Never mutate state directly (`count = 5`) — always call the setter (`setCount(5)`)
- State updates can be stale if you use the current value directly in quick succession — use the functional form `setCount(c => c + 1)` when the new value depends on the previous one
- React events are camelCase (`onClick`, `onChange`, `onSubmit`) and pass an event object `e` — `e.target.value` reads an input's current text
- Controlled inputs: `value={state}` + `onChange` keeps React state as the single source of truth for form fields
- Each component instance has its own independent state, even when rendered from the same component function multiple times

## What I built
- Like button on each `ProfileCard`, using its own local `useState` — confirmed each card's likes count is independent
- Standalone `Counter` component with +, −, and Reset buttons using functional updates
- Bonus: `CharCounter` — a controlled input showing live character count
