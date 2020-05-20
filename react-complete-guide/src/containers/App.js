import React, { Component } from "react";
import "./App.scss";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    person: [
      { id: 1290, name: "Niharika", age: 22 },
      { id: 1926, name: "Nainakshi", age: 22 },
      { id: 8751, name: "Prateeti", age: 23 },
    ],
    otherState: "some other value",
    showPerson: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);

    return state;
  }

  // componentDidMount() {
  //   console.log('[App.js] componentDidMount')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");

    console.log(nextProps, this.props)
    if(nextProps.person === this.props.person) {
      return true
    } else {
      return false;
    }

  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];

    persons.splice(personIndex, 1);

    this.setState({
      person: persons,
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({
      person: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;

    this.setState({
      showPerson: !doesShow,
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
          {/* Key always has to be in the outer element in a map method */}
        </div>
      );
    }

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personLength={this.state.person.length}
            clicked={this.togglePersonsHandler}
            showPerson={this.state.showPerson}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
