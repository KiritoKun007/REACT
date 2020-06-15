import React, { useState } from 'react';

import './AddPerson.css';

const AddPerson = (props) => {

    const [name, setname] = useState('')

    const [age, setage] = useState(null)

    const nameChangeHandler = event => {
        setname(event.target.value)
    }

    const ageChangeHandler = event => {
        setage(event.target.value)
    }

    return (
        <div className="AddPerson">
            <input 
                type="text" 
                name="name" 
                placeholder='Name' 
                onChange={nameChangeHandler} 
                defaultValue={name} />
            <input 
                type="number" 
                name="age" 
                placeholder='Age' 
                onChange={ageChangeHandler} 
                defaultValue={age} />
            <button onClick={() => props.personAdded(name, age)}>Add Person</button>
        </div>
    )
};

export default AddPerson;