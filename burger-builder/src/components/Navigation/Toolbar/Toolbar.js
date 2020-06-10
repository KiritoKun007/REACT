import React from 'react'

import './Toolbar.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/Drawertoggle/DrawerToggle'

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle class="ToggleDrawer" clicked={props.openSideDrawer}/>
            <div className="ToolbarLogo">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
