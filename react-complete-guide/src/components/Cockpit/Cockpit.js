import React from 'react'
import './Cockpit.scss'

const Cockpit = (props) => {

    let classes = []

    if(props.personLength <= 2) {
      classes.push('red')
    }
    if(props.personLength <= 1) {
      classes.push('bold')
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a {props.title}</h1>
            <p className={classes.join(' ')}>This is really working.</p>
            <button
                className={ props.showPerson ? 'greenButton': 'Button' }
                //hover={this.state.showPerson}
                onClick={props.clicked} >
                { !props.showPerson ? 'Show Persons': 'Hide Persons' }
            </button>
        </div>
    )
}

export default Cockpit
