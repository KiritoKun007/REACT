import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get(`/ingredients.json`)
        //     .then(response => {
        //         this.setState({ ingredients: response.data })
        //     })
        //     .catch(error => {
        //         // console.log(error)
        //         this.setState({ error: true }) 
        //     })
    }

    updatePurchaseState (updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
        .map(igKey => {
            return updatedIngredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0)

        return sum > 0
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
        this.props.history.push('/checkout')
    }
 
    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }

        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

        if(this.props.ingredients) {
            burger = (
                <Fragment>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}
                        totalPrice={this.props.totalPrice}
                        purchasing={this.purchaseHandler} />
                </Fragment>
            )

            orderSummary = <OrderSummary
                                ingredients={this.props.ingredients}
                                cancelOrder={this.purchaseCancelHandler}
                                continueOrder={this.purchaseContinueHandler}
                                price={this.props.totalPrice} />;
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch(
        {
            type: actionTypes.ADD_INGREDIENT, 
            ingredient: { 
                name: name 
            }
        }),
        onIngredientRemove: (name) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredient: {
                name: name
            }
        }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))