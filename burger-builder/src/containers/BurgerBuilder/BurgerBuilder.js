import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    salad: 7,
    cheese: 28,
    meat: 39,
    bacon: 11
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null, 
        totalPrice: 30,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get(`/ingredients.json`)
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => {
                // console.log(error)
                this.setState({ error: true }) 
            })
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

        this.setState((prevState) => {
            return {loading: !prevState.loading}
        })
        // console.log(12344)
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Ashish Padhi',
                address: {
                    street: 'Worli Naka',
                    zipcode: '400013',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState((prevState) => {
                    return {loading: !prevState.loading, purchasing: !prevState.purchasing}
                })
            })
            .catch(error => {
                console.log(error)
                this.setState((prevState) => {
                    return {loading: !prevState.loading, purchasing: !prevState.purchasing}
                })
            })
    }
 
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

        if(this.state.ingredients) {
            burger = (
                <Fragment>
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

            orderSummary = <OrderSummary
                                ingredients={this.state.ingredients}
                                cancelOrder={this.purchaseCancelHandler}
                                continueOrder={this.purchaseContinueHandler}
                                price={this.state.totalPrice} />;
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)