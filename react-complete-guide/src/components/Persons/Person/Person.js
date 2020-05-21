import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import './Person.scss'
import withClass from '../../../higherOrderComponent(hoc)/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // document.querySelector('input').focus()

    // this.inputElement.focus()

    this.inputElementRef.current.focus()
    console.log(this.context.authenticated);
    
  }

    render() {
      console.log('[Person.js] rendering...!!')

      const {name, age, children, click } = this.props

      return (
        <Fragment>
            { (this.context.authenticated) ? <p>Authenticated</p> : <p>Please Login!!</p> }
            <p onClick={click}> I'm {name} and I am {age} year old! </p>
            <p>{children}</p>
            <input 
              // ref={(inputEl) => { this.inputElement = inputEl }}
              ref={this.inputElementRef}
              type="text" 
              onChange={this.props.change} 
              defaultValue={name}
              />
        </Fragment>
      )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, "Person")
