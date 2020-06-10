import React from 'react'

import './BuildControl.scss'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.ingredient}</div>
            <button 
                className="Less" 
                onClick={props.removed} 
                disabled={props.disabled} >Remove</button>
            <button 
                className="More" 
                onClick={props.added} >Add</button>
        </div>
    )
}

export default BuildControl
