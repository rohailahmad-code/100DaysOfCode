<!-- Day 8 -->

# Day 8 Topics

- Rendering Content Conditionally
- Handling Dynamic Content
- Outputting Lists
- Lists and State
- Updating State Immutably
- Lists and Keys



# Topics Explanation



<hr>

## Rendering Content Conditionally

<hr>


You can build Single Page Applications (SPA) that are dynamic and highly interactive with React. One feature that allows for this is conditional rendering.

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios:

- Rendering external data from an API.
- Showing or hiding elements.
- Toggling application functionality.
- Implementing permission levels.
- Handling authentication and authorization.

<hr>

## Handling Dynamic Content

<hr>

React dynamic content is a component to organize custom html content using layouts and reposition by dragging.

Features of react-dynamic-content

Content organization using "cascading" or "google images" layouts that resize elements to fit columns and rows
Supports any kind of content, not just images (can be text, video, complex elements)
Customization of layout method (you can provide your own layout positioning method)
Changing order of elements by moving them with mouse/touch events, and receiving callback with new setting
Customization of drag initiation (for example if you want to start drag with swipe or long click)
Mobile friendly


<hr>

## Lists

<hr>

Lists are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying menus in a website, for example, the navbar menu. In regular JavaScript, we can use arrays for creating lists. We can create lists in React in a similar manner as we do in regular JavaScript.

<hr>

## Keys

<hr>

A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used to React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists. The next thing that comes to mind is that what should be good to be chosen as key for the items in lists. It is recommended to use a string as a key that uniquely identifies the items in the list.