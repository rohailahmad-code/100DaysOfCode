<!-- Day 2 -->

# Day 2 Topics

- Outputting Dynamic Content
- Props
- Children Property
- State
- Handling Events with Methods
- setState

# Topics Explaination

<hr>

## Outputting Dynamic Content

<hr>

We can Output Dynamic content as part of our JSX content. We can't define JavaScript class in there or anything like that. We can execute one line expressions. I could call a function here and this function might then do more complex stuff.

CODE = {Math.floor(Math.random()*30)}

<hr>

## Props (Property)

<hr>

It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are Passed to the components in the same way as argument passed in a function.


<hr>

## Children Property

<hr>

Children is a special prop, Automatically passed to every component that can be used to render the content included between the opening and closing tags. when invoking a component these kind of components are identified by the official documentation as "Boxes".

<hr>

## State

<hr>

The State is a built-in React object that is used to contain data or information about the component. A Component State can change over time whenever it changes the component Re-renders.

OR

The state object is where you store property values that belongs to the component.

State can be modified using  (this .setState())


<hr>

## Handling Events with Methods

<hr>


Handling events with React elements is very similar to handling events on DOM elements.

There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

<hr>

## setState

<hr>

setState enqueues changes to the component state and tells react that this component and its children need to be Re-rendered with updated state. This is the Primary method you use to update the user interface in response to event handlers and server responses.












