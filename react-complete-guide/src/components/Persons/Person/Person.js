import React, { Component } from 'react'
import './Person.scss'

class Person extends Component {

    render() {
      console.log('[Person.js] rendering...!!')

      const {name, age, children, click} = this.props

      return (
          <div className="Person">
              <p onClick={click}> I'm {name} and I am {age} year old! </p>
              <p>{children}</p>
              <input type="text" onChange={this.props.change} defaultValue={name}/>
          </div>
      )
    }
}

export default Person
