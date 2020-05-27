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
            {BUILD_CONTROLS.map((ingredient, i) => {
                return <BuildControl 
                            ingredient={ingredient.label} 
                            key={ingredient.type} 
                            added={() => props.ingredientAdded(ingredient.type)}
                            removed={() => props.ingredientRemoved(ingredient.type) } />
            })}
        </div>
    )
}

export default BuildControls
