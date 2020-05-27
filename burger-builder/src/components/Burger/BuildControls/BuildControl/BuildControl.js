import React from 'react'

import './BuildControl.scss'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.ingredient}</div>
            <button className="More" onClick={props.added}>Add</button>
            <button className="Less" onClick={props.removed}>Remove</button>
        </div>
    )
}

export default BuildControl
