import React from 'react'
import './Person.css'
import Radium from 'radium'

const Person = (props) => {

    const style = {
        '@media (min-width:500px)': {
            width: '300px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} year old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} defaultValue={props.name}/>
        </div>
    )
    
}

export default Radium(Person)
