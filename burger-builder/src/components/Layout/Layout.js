import React, { Fragment, Component } from 'react'
import './layout.scss'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Fragment>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    closeSideDrawer={this.sideDrawerToggleHandler} />
                <Toolbar
                    openSideDrawer={this.sideDrawerToggleHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
} 

export default Layout