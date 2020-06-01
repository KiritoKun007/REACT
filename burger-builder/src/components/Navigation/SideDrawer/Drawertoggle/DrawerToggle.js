import React from 'react'

import './DrawerToggle.scss'

const DrawerToggle = (props) =>(
    <div
        onClick={props.clicked} 
        className={props.class} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle
