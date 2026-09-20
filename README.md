# 🧱 Dev Stack Builder

Dev Stack Builder is a React web app for browsing modern web development
technologies and putting together our own personal "stack." Instead of
scrolling through docs and blog posts, we flip through cards for frontend,
backend, database, and DevOps tools, and collect the ones we'd actually
build with into a live sidebar panel.

## 🛠️ Built With

- **React 19** component-based UI
- **Vite** dev server and build tool
- **Tailwind CSS** utility-first styling
- **React-Toastify** toast notifications
- **JSON** technology data source

## ✨ Features

1. **Live stack builder** click "Add to Stack" on any of the 15
   technology cards and it instantly appears in the "Your Stack" sidebar,
   with duplicate adds blocked and warned against.
2. **Fully responsive layout** a sticky navbar that collapses into a
   hamburger menu on mobile, and a technology grid that reflows from 3
   columns down to 1 as the screen narrows.
3. **One-line re-theming** the entire brand look (logo, hero highlight,
   buttons) is driven by a single gradient defined once in `index.css`, so
   changing three color stops re-skins the whole site.

## 🚀 Getting Started

bash
npm install
npm run dev



## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly
inside JavaScript. We use it because it make component structure easy to
read and write instead of building elements with React.createElement
calls, we just write tags, and JSX compiles them down to that for us.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent, and the
component can't change them itself they're read-only from its
perspective. State is data a component owns and manages internally, and it
can change over time usually in response to user actions, which triggers
a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
useState gives a component a piece of memory that persists between
renders, plus a function to update it. In this project it's used in App.jsx
to track the list of technologies, the loading flag, and the array of items
in "Your Stack," and in Navbar.jsx to track whether the mobile menu is
open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
useEffect runs a side effect after a component renders things like
fetching data, subscriptions, or timers, which aren't part of the render
itself. Fetching the technology JSON is a side effect it reaches outside
the component to the network/filesystem, so it's done inside useEffect
with an empty dependency array, meaning it only runs once when the app
first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the key to tell which list items changed, were added, or were
removed between renders, so it can update the DOM efficiently instead of
re-rendering the whole list. Without a stable, unique key, React can
mismatch items and cause bugs or unnecessary re-renders so each
technology card and stack item is keyed by its unique id.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. In YourStack.jsx,
if stack.length === 0 the component renders an empty-state message
"Your stack is empty..."instead of the list of stack items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props, e.g. `<TechCard tech={tech} isAdded={...} />`. For a child to send something back up, the parent passes down a function as a prop (e.g. `onAdd`), and the child calls that function like `onClick={onAdd}` in `TechCard.jsx` which runs the parent's logic (`handleAdd` in `App.jsx`) with whatever data the child provides.

