<!-- Day 4 -->

# Day 4 Topics

- Adding Two Way Binding
- Adding Styling with Stylesheets
- Working With Inline Styles

# Topics Explanation 

<hr>

## Adding Two Way Binding

<hr>

In React, data flows one way: from owner to child. We think that this makes your app’s code easier to understand. You can think of it as “one-way data binding.”

However, there are lots of applications that require you to read some data and flow it back into your program. For example, when developing forms, you’ll often want to update some React state when you receive user input. Or perhaps you want to perform layout in JavaScript and react to changes in some DOM element size.

In React, you would implement this by listening to a “change” event, read from your data source (usually the DOM) and call setState() on one of your components. “Closing the data flow loop” explicitly leads to more understandable and easier-to-maintain programs.

Two-way binding — implicitly enforcing that some value in the DOM is always consistent with some React state — is concise and supports a wide variety of applications.

<hr>

## Adding Styling with Stylesheets

<hr>

You can create a new CSS file in your project directory and add your CSS inside it. You can then import it in your component, class or React JS page.
The following code is used to import an external CSS stylesheet.


CODE => import "./styles.css";


<hr>

## Working With Inline Styles 

<hr>


Probably the most common and quickest out of all 3 is inline CSS. However it has many disadvantages and it is generally discouraged to use unless it is a very small application.
Basically, we create an object that contains different references which are then called using the style{} attribute.
For example, the CSS is added like this:


const styles = {                    <br>
  section: {                        <br> 
 fontSize: "18px",               <br>
    color: "#292b2c",               <br>
    backgroundColor: "#fff",        <br>
    padding: "0 20px"               <br>
  },                                <br>
  wrapper: {                        <br>
    textAlign: "center",            <br>
    margin: "0 auto",               <br>
    marginTop: "50px"               <br>
  }                                 <br>
}                                   <br>

It is then added to an element like this:

{styles.section} <br>
{styles.wrapper}

