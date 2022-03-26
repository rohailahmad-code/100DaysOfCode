import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    person: [
      {name:'Rohail Ahmad ', age:'21'},
      {name:'Bilal Shinwari ', age:'20'},
      {name:'Sohail Ahmad ', age:'27'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      person: [
        {name: newName, age:'25'},
        {name:'Mike ', age:'28'},
        {name:'Alexa', age:'33'}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      person: [
        {name:'David', age:'25'},
        {name: event.target.value, age:'28'},
        {name:'Alexa', age:'33'}
      ]
    } )
  }

  render() {
    // Inline styles on Button
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
          <h1>Hi The React App is Running</h1>
          <p>This is really working</p>
          <button style={style}  
          onClick={this.switchNameHandler.bind(this, 'David ')}>Switch Name</button>
          <Person name={this.state.person[0].name} 
          age={this.state.person[0].age} />

          <Person name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >
            Hobbies: Coding
          </Person>

          <Person name={this.state.person[2].name} 
          age={this.state.person[2].age} />      
      </div> 
      //The Function component is Reusable.
    );
   
  }
}

export default App;
