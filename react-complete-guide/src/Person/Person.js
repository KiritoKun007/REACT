import React from 'react'
import './Person.scss'

const Person = (props) => {

    const rnd = Math.random()

    if(rnd > 0.7) {
        throw new Error('something went wrong')
    }

    return (
        <div className="Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} year old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} defaultValue={props.name}/>
        </div>
    )
    
}

export default Person
