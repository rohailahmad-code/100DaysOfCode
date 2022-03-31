<!-- Day 1 -->

# Day 1 Topics

- What is React?
- Creating React App.
- What is React Component?
- Understand JSX.
- JSX Restrictions.
- Functional Component

# Topics Explanation

<hr>

## What is React?

<hr>

React is a JavaScript Library for Building User-Interfaces (UI).
- User-Interfaces Build through Components.

With the help of components we can build the following building blocks,
- Header
- Headline
- Sidebar
- Navigation Bar
- Article Content
- Footer, etc.

And we can also reuse the components very easily.

<hr>

## How to create React App?

<hr>

For creating react app we need to download node.js and after that we will use some commands to create react app.

INSTALLING REACT APP GLOBALLY:

COMMAND = npm install create-react-app -g

Now Creating your React App Project.

First of all you have to Navigate to that folder where you want to create the React App Project using Command Prompt, Powershell or IDE Terminal.

COMMAND = create-react-app MyApp --scripts-version 1.1.5

The second command does not impact the version. You are using the latest version NO WORRIES. This simply impacts the structure of project.

Navigate in the New folder as below:

COMMAND = cd MyApp 

And Finally

COMMAND = npm start

This command will start you project server.

<hr>

## What is React Component?

<hr>

React components are independent and reusable bits of code. They serve the same purpose as JavaScript Function, but work in isolation and return HTML.

Components come in two types:

- Function Components
- Class Components

<hr>

## Understand JSX ( JavaScript XML)

<hr>

React JSX is an extension to JavaScript. it enables developer to create virtual DOM using XML syntax and it provides a way to structure component rendering using syntax fimilliar to many developers. it is similiar in appearance to HTML.

<hr>

## JSX Restrictions.

<hr>

I have come across some of the React JSX rules must be follow while using React.


- Return Single Element.
- div/section/article or React Fragment.
- Use camelCase for HTML Attribute.
- className Instead of Class.
- Close Every Element.
- Formatting.
- Tags are elements.


<hr>

## Functional Component

<hr>


A Functional component is basically a JavaScript/ES6 Function that returns a React element (JSX).

It is a Function that takes Props and return JSX. They do not have state or Life-Cycle methods. Functional components are easier to read, debug and test. They offer performance benifits, decreased coupling and greater reusability.
