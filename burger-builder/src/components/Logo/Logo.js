import React from 'react'
import burgerLogo from '../../assets/images/Logo.png'
import './Logo.scss'

const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={burgerLogo} alt="My sBurger"/>
        </div>
    )
}

export default Logo
