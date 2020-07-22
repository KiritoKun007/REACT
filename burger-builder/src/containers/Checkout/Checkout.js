import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import * as actions from '../../store/actions/index'

class Checkout extends Component {

    componentDidMount() {
        this.props.onInitPurchase()
    }

    componentDidUpdate(prevProps) {
        if(this.props.purchased !== prevProps.purchased) {
            this.props.onInitPurchase()
        }
    }

    cancelOrderHandler = () => {
        this.props.history.goBack()
    }

    continueOrderHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const { ingredients, purchased } = this.props 

        let checkoutSummary = <Redirect to="/" />
        if(ingredients) {
            const purchasedRedirect = purchased ? <Redirect to="/" /> : null
            checkoutSummary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ingredients}
                        cancelOrder={this.cancelOrderHandler}
                        continueOrder={this.continueOrderHandler} />

                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData} /> 
                </div>
            )
        }

        return checkoutSummary
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.BB.ingredients,
        purchased: state.Order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
