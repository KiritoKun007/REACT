import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    cancelOrderHandler = () => {
        this.props.history.goBack()
    }

    continueOrderHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const ingredients = this.props.ingredients 

        let checkoutSummary = null
        if(ingredients) {
            checkoutSummary = <CheckoutSummary 
                                ingredients={this.props.ingredients}
                                cancelOrder={this.cancelOrderHandler}
                                continueOrder={this.continueOrderHandler} />
        }

        return (
            <div>
                {checkoutSummary}
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)
