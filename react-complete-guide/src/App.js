import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {
        name: 'Niharika',
        age: 22
      },
      {
        name: 'Nainakshi',
        age: 22
      },
      {
        name: 'Prateeti',
        age: 23
      }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!!!')
    // DON'T DO THIS
    // this.state.person[0].name = 'Jhalli'
  
    this.setState({
      person: [
        {
          name: 'Varsha',
          age: 22
        },
        {
          name: 'Sakshi',
          age: 22
        },
        {
          name: newName,
          age: 23
        }
      ]
    })
  }

  nameChangeHandler = event => {

    event.preventDefault()

    this.setState({
      person: [
        {
          name: 'Niharika',
          age: 22
        },
        {
          name: 'Nainakshi',
          age: 22
        },
        {
          name: event.target.value,
          age: 23
        }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'black',
      font: 'inherit',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      padding: '10px' ,
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p>This is really working.</p>
        <button 
          style={style}
          // Second method of passing argument
          onClick={() => this.switchNameHandler('Meenakshi')} 
        >Switch Names</button>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          // How to pass argument to method using bind() and 'this'
          click={this.switchNameHandler.bind(this, 'MeenSn')} // passed the methods reference to the component
          change={this.nameChangeHandler}
        >
          My hobbies: Painting
        </Person>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;


