import React from 'react'

const Cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm a React App!!</h1>
            <p className={props.redNBoldLine.join(' ')}>This is really working.</p>
            <button
                className={props.btnClass}
                //hover={this.state.showPerson}
                onClick={this.togglePersonsHandler} >
                { !this.state.showPerson ? 'Show Persons': 'Hide Persons'}
            </button>
        </div>
    )
}

export default Cockpit
