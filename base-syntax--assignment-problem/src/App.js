import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    users: [
      {username: 'Ashish', gf: 3},
      {username: 'Shashi', gf: 2},
      {username: 'Uttaran', gf: 1},
      {username: 'Abhishek', gf: 5}
    ]
  }

  setUsernameHandler = (username) => {

    this.setState({
      users: [
        {username: 'Ashish'},
        {username: username},
        {username: 'Uttaran'},
        {username: 'Abhishek'}
      ]
    })
  }

  changeUsernameHandler = (event, index) => {

    console.log(event, index)
    this.setState({
      users: [
        {username: 'Ashish'},
        {username: `${index.target.value}-${event}`},
        {username: 'Uttaran'},
        {username: 'Abhishek'}
      ]
    })

  }

  render() {

    const btnStyle = {
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
        <ol>
          {/* <li>Create TWO new components: UserInput and UserOutput</li> */}
          {/* <li>UserInput should hold an input element, UserOutput two paragraphs</li> */}
          {/* <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li> */}
          {/* <li>Pass a username (of your choice) to UserOutput via props and display it there</li> */}
          {/* <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li> */}
          {/* <li>Add a method to manipulate the state (=> an event-handler method)</li> */}
          {/* <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li> */}
          {/* <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li> */}
          {/* <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li> */}
          {/* <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li> */}
        </ol>

        <button onClick={this.setUsernameHandler.bind(this, 'Prerit')} style={btnStyle}>Click Here to Change Name</button>

        <UserOutput username={this.state.users[0].username} change={this.changeUsernameHandler} id={0}/>
        <UserOutput username={this.state.users[1].username} change={this.changeUsernameHandler} id={1}/>
        <UserOutput username={this.state.users[2].username} change={this.changeUsernameHandler} id={2}/>
        <UserOutput username={this.state.users[3].username} change={this.changeUsernameHandler} id={3}/>

      </div>
    );
  }
}

export default App;
