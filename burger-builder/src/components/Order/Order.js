import React from 'react'

import './Order.scss'

const Order = (props) => {

    let ingredients = null
    if(props.ingredients) {
        ingredients = Object.keys(props.ingredients).map(ingkey => {
            return <p key={ingkey} style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }} >{ingkey} ({props.ingredients[ingkey]})</p>
        })
    }

    return (
        <div className="Order">
            <div>
                Ingredients: 
                {ingredients}
            </div>
            <p>Price: <strong>Rs. {props.price}</strong> </p>
        </div>
    )
}

export default Order
