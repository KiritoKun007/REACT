import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
    
  //   if (
  //     nextProps.person !== this.props.person ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //       console.log("[Persons.js] shouldComponentUpdate");
  //       return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!!" };
  }

  // componentWillUpdate() {
  //
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot, prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...!!");

    const { person, clicked, changed } = this.props;

    return person.map((p, i) => {
      return (
        <Person
          click={clicked.bind(this, i)}
          key={p.id}
          name={p.name}
          age={p.age}
          change={(event) => changed(event, p.id)}
        />
      );
    });
  }
}

export default Persons;
