import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: null
    }

    componentDidMount() {
        let burgerPreviewIngredients = {}
        const queryParams = new URLSearchParams(this.props.location.search)
        let price = null

        for (let query of queryParams.entries()) {
            if(query[0] === 'Price') {
                price = +query[1]
            } else {
                burgerPreviewIngredients[query[0]] = +query[1]
            }
        }
        console.log(burgerPreviewIngredients)

        this.setState({
            ingredients: burgerPreviewIngredients,
            totalPrice: price
        })
    }

    cancelOrderHandler = () => {
        this.props.history.goBack()
    }

    continueOrderHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        const ingredients = this.state.ingredients 

        let checkoutSummary = null
        if(ingredients) {
            checkoutSummary = <CheckoutSummary 
                                ingredients={this.state.ingredients}
                                cancelOrder={this.cancelOrderHandler}
                                continueOrder={this.continueOrderHandler} />
        }

        return (
            <div>
                {checkoutSummary}
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => {
                        return (
                            <ContactData 
                                ingredients={this.state.ingredients} 
                                price={this.state.totalPrice}
                                {...props} />
                        )
                    }} /> 
                    {/* // component={ContactData} /> */}
            </div>
        )
    }
}

export default Checkout
