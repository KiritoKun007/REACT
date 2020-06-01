import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice: 30,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState (updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
        .map(igKey => {
            return updatedIngredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0)

        this.setState({purchasable: sum > 0})
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

        this.updatePurchaseState(updatedIngredients)
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

            this.updatePurchaseState(updatedIngredients)

        }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        console.log(12344)
    }
 
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelOrder={this.purchaseCancelHandler}
                        continueOrder={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    purchasing={this.purchaseHandler} />
            </Fragment>
        )
    }
}

export default BurgerBuilder