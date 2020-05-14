import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    person: [
      {
        id: 1290,
        name: 'Niharika',
        age: 22
      },
      {
        id: 1926,
        name: 'Nainakshi',
        age: 22
      },
      {
        id: 8751,
        name: 'Prateeti',
        age: 23
      }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {

    // const persons = this.state.person;
    // const persons = this.state.person.slice();
    const persons = [...this.state.person]

    persons.splice(personIndex, 1);

    this.setState({
      person: persons
    })
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.person[personIndex]
    }

    // const personAlt = Object.assign({}, this.state.person[personIndex] )

    person.name = event.target.value 

    const persons = [...this.state.person]

    persons[personIndex] = person
     
    this.setState({
      person: persons
    })
  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPerson

    this.setState({
      showPerson: !doesShow
    })
  }

  render() {

    let persons = null
    let btnClass = 'button'

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((p, i) => {
            return <ErrorBoundary key={p.id}> 
              {/* Key always has to be in the outer element in a map method */}
                <Person 
                  click={this.deletePersonHandler.bind(this, i)}
                  name={p.name} 
                  age={p.age} 
                  change={(event) => this.nameChangeHandler(event, p.id)} />
              </ErrorBoundary> 
          })}
          {/* <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
            // How to pass argument to method using bind() and 'this'
            click={this.switchNameHandler.bind(this, 'MeenSn')} // passed the methods reference to the component
            change={this.nameChangeHandler}
          >
            My hobbies: Painting
          </Person> */}
        </div>
      )      

      btnClass = 'greenButton'
      // style.backgroundColor = 'green'
    }

    let classes = []

    if(this.state.person.length <= 2) {
      classes.push('red')
    } 
    if(this.state.person.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App!!</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button
          className={btnClass}
          //hover={this.state.showPerson}
          onClick={this.togglePersonsHandler} 
        >{ !this.state.showPerson ? 'Show Persons': 'Hide Persons'}</button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;


