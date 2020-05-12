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

  switchNameHandler = () => {
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
          name: 'Sparsh',
          age: 23
        }
      ]
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My hobbies: Painting</Person>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;


