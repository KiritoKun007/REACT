import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKeys => {
        return (<li key={igKeys}> 
                    <span 
                        style={{textTransform: 'capitalize'}} >
                        {igKeys}
                    </span> : {props.ingredients[igKeys]}
                </li> )
    })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <b>Total Price: {props.price}</b> </p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
        </Fragment>
    )
}

export default OrderSummary
