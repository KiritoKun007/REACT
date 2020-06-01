import React, { Fragment, Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    // This could be functional component, doesn't have to be a class.
    
    render() {

        const { ingredients, price, cancelOrder, continueOrder } = this.props

        const ingredientSummary = Object.keys(ingredients).map(igKeys => {
            return (<li key={igKeys}> 
                        <span 
                            style={{textTransform: 'capitalize'}} >
                            {igKeys}
                        </span> : {ingredients[igKeys]}
                    </li> )
        })
    
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> <b>Total Price: {price}</b> </p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={cancelOrder}>CANCEL</Button>
                <Button btnType="Success" clicked={continueOrder}>CONTINUE</Button>
            </Fragment>
        )
    }
}

export default OrderSummary
