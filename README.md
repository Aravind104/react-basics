# React Basics

- React apps are made out of components
- A component is a piece of the UI(user interface) that has its own logic and appearence
- React components can be as small as button, or as large as an entire page
- React components are javascript functions that `return markup`.

## Nesting component

- One component can be nested inside another component like we can see in the `App.jsx` file we nested the `Button.jsx file`
- We can notice that component name starts with capital letters `<Button />` thats how we can identify it has React component
- HTML tags names must start with lower case letter

## Writing markup with JSX

- The syantax that we see in the `App.jsx` component is called `JSX` because it returns the code that contains HTMl also

- JSX is more strict we have to close tags like `<br />`
- components can't return multiple JSX tags we have to wrap them into shared parent tags like `<div>..</div>` or empty `<>..</>` wrapper
