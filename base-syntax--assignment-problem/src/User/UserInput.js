import React from 'react'

const UserInput = (props) => {
    return (
        <div> 
            <input type="text" onChange={props.change.bind(this, props.id)} defaultValue={props.username} />
        </div>
    )
}

export default UserInput