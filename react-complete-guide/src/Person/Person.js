import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} year old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} />
        </div>
    )
    
}

export default Person