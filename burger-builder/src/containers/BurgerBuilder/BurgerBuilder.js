import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 7,
    cheese: 28,
    meat: 39,
    bacon: 11
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            salad: 0,
            meat: 0,
        }, 
        totalPrice: 30
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1
    
            const updatedIngredients = {
                ...this.state.ingredients
            }
    
            updatedIngredients[type] = updatedCount
    
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
        }
    }

    render() {

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} />
            </Fragment>
        )
    }
}

export default BurgerBuilder