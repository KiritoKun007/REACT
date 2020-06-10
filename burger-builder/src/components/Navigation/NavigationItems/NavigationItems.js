import React from 'react'
import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/orders">
                My Orders
            </NavigationItem>
        </ul>
    )
}

export default NavigationItems
