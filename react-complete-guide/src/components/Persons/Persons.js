import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.person.map((p, i) => {
            return <Person 
                  click={props.clicked.bind(this, i)}
                  key={p.id}
                  name={p.name} 
                  age={p.age} 
                  change={(event) => props.changed(event, p.id)} />
            })

export default Persons
