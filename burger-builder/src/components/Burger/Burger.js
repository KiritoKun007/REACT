import React from 'react'
import { withRouter } from 'react-router-dom'

import './Burger.scss' 
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    console.log(props)

    let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((a, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if(transformedIngredient.length === 0) {
        transformedIngredient = <p>Please Start Adding Ingredients!!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default withRouter(Burger)
