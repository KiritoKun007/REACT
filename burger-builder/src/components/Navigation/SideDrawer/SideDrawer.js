import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import './SideDrawer.scss'

const SideDrawer = (props) => {

    const attachedClasses = props.show ? ["SideDrawer", 'Open'] : ["SideDrawer", "Close"];

    return (
        <Fragment>
            <div className={attachedClasses.join(' ')}>
                <div className='SideDrawerLogo'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />        
                </nav>
            </div>
            <Backdrop 
                show={props.show}
                clicked={props.closeSideDrawer} />
        </Fragment>
    )
}

export default SideDrawer
