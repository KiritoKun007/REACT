import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personState, setPersonState ] = useState({
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
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personState, otherState)
  
  const switchNameHandler = () => {
    // console.log('was clicked!!!')
    // DON'T DO THIS
    // this.state.person[0].name = 'Jhalli'
  
    setPersonState({
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
      ],
      
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!!</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personState.person[2].name} age={personState.person[2].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age}>My hobbies: Painting</Person>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;


