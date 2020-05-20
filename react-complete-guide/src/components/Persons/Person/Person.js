import React, { Component } from 'react'
import './Person.scss'

class Person extends Component {

    render() {
      console.log('[Person.js] rendering...!!')

      const {name, age, children, click} = this.props

      return [
        <p key="i1" onClick={click}> I'm {name} and I am {age} year old! </p>,
        <p key="i2">{children}</p>,
        <input key="i3" type="text" onChange={this.props.change} defaultValue={name}/>
      ]
    }
}

export default Person
