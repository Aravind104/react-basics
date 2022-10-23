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

- `About.jsx` styled using the `className` keyword the class `avatar` is defined in the `About.css` file

## Adding styles

- React doesn't tell How you add CSS files .In the simplest case we can add `<link>` tag to the HTML sheet

- Lets say you want to use `tailwind CSS` we need to follow below steps

- Install Tailwind CSS

  - Install `tailwindcss` and its peer dependencies via npm, and create your `tailwind.config.js` and `postcss.config.js`.

  `npm install -D tailwindcss postcss autoprefixer`

  `npx tailwind init -p`

- Configure your template paths

  - Add the paths to all of your template files in your tailwind.config.js file.
    `
  - /\*_ @type {import('tailwindcss').Config} _/

  module.exports = {

  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
  extend: {},
  },

  plugins: [],
  }`

- Add the Tailwind directives to your CSS

  - Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.

  - `@tailwind base;

    @tailwind components;

    @tailwind utilities;`

- Start your build process

  - Run your build process with npm run start.
  - `npm run start`

- Start using Tailwind in your project

  - Start using Tailwind’s utility classes to style your content.

  `export default function App()

  {

       return (

      <h1 className="text-3xl font-bold underline">

        Hello world!

      </h1>)

  }`

##
