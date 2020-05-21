import React, { useEffect, memo, useRef, useContext } from 'react'
import './Cockpit.scss'
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null)

  const context = useContext(AuthContext)

  console.log(context.authenticated)
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click()
      // Http request...

      // const timer = setTimeout(() => {
      //   alert('Saved data to cloud!!')
      // }, 1000)

      return () => {
        // clearTimeout(timer)
        console.log('[Cockpit.js] cleanup work in useEffect.')
      }
    }, [])

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');

      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect.')
      }
    })

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
                ref={toggleBtnRef}
                className={ props.showPerson ? 'greenButton': 'Button' }
                //hover={this.state.showPerson}
                onClick={props.clicked} >
                { !props.showPerson ? 'Show Persons': 'Hide Persons' }
            </button>
            <button onClick={context.login} className="Button" >Log In</button>
        </div>
    )
}

export default memo(Cockpit)
