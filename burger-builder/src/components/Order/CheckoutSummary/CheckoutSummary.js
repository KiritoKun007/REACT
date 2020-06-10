import React from 'react'

import './CheckoutSummary.scss'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well :)</h1>
            <div className="burger-preview">
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger" 
                clicked={props.cancelOrder} >CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.continueOrder} >CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary
