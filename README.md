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

## Displaying Data

- JSX lets us put markup into javascript
- Curly braces let you "escape back" into javascript so that you can embed some variable from your code and display it to the user.

- In the `Profile.jsx` component i embeded the data from user object into the markup using `curly braces`

## Conditional rendering

- if you want to conditionally render component onto the screen there are basically same ways we do in core javascript
  - using if..else condition
  - using ternary operator
  - using && condition
- I gave example code for all 3 condition in the the components folder
- Basically we are trying to render the login page if user is registered or else we need to show the Registration page

## Rendering Lists

- To render the List Items on to the screen in React we can use `for loop and Map function`

- In the `ShopingList.jsx` component i used `map` function to render the titles of the products

- You can notice that each list item has a key attribute For each item in alist you should pass a string or a number that uniquely identifies that item among its siblings
- Key should be coming from your data, such as database ID. React will rely on your keys to understand what happened if you later insert,delete,or reorder items

## Responding to events

- You can respond to events by declaring event handler functions inside your component
- In the `MyButton.jsx` component i created a button named "click" when you click on it gives the alert by calling the event handler function `handleClick`

## Updating the screen

- Most of the time we want components we write to "remember" some information and display it to the screen to accomplish this task we add `state` to the components

- To add the `state` to the components we need to import the `useState` Hook from `React`

- In the `MyButton.jsx` component i created a button named "Clicked {count} times" here `count` is the variable that kepps updating whenever user clicks on the button

- useState takes intial value as the argument and it is assigned to [something,setSomething] in our case we used [count,setCount] here setSomething or any name of you choice will track the state of the something

- When we render the same component two or more number of times each component maintains its own state you can see it in `App.jsx` component i rendered the `MyButton.jsx` component twice both maintain different "count value"
