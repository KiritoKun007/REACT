import React from 'react'

import './BuildControls.scss'
import BuildControl from './BuildControl/BuildControl'

const BUILD_CONTROLS = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.totalPrice}</strong> </p>
            {BUILD_CONTROLS.map((ingredient, i) => {
                return <BuildControl 
                            ingredient={ingredient.label} 
                            key={ingredient.type} 
                            added={() => props.ingredientAdded(ingredient.type)}
                            removed={() => props.ingredientRemoved(ingredient.type) }
                            disabled={props.disabled[ingredient.type]} />
            })}
            <button 
                className="OrderButton" 
                disabled={!props.purchasable} 
                onClick={props.purchasing}>
                    ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls
