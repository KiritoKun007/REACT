import React from 'react'
import UserInput from './UserInput'

import './User.css'

const UserOutput = (props) => {
    return (
        <div className="user-box">
            <p>{props.username} is my friend.</p>
            <UserInput change={props.change} username={props.username} id={props.id}/>
        </div>
    )
}

export default UserOutput