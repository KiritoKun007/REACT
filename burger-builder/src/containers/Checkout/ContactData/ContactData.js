import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import './ContactData.scss'

import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state = {
        name: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
        },
        email: '',
        loading: false
    }

    orderhandler = (e) => {
        e.preventDefault()

        console.log(this.props.ingredients)

        this.setState((prevState) => {
            return {loading: !prevState.loading}
        })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: {
                    street: this.state.address.street,
                    city: this.state.address.city,
                    state: this.state.address.state,
                    zipcode: this.state.address.zipcode,
                },
                email: this.state.email
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState((prevState) => {
                    return {loading: !prevState.loading}
                })

                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
                this.setState((prevState) => {
                    return {loading: !prevState.loading}
                })
            })
    }

    inputHandler = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    inputAddressHandler = (e) => {
        e.preventDefault();

        let oldAddress = {...this.state.address}

        oldAddress[e.target.name] = e.target.value

        this.setState({
            address: oldAddress
        })
    }

    render() {

        let form = (
            <form>
                <input type="text" name="name" id="name" placeholder="Your Name" onChange={this.inputHandler}/>
                <input type="text" name="street" id="street" placeholder="Street" onChange={this.inputAddressHandler} />
                <input type="text" name="city" id="city" placeholder="City" onChange={this.inputAddressHandler} />
                <input type="text" name="state" id="state" placeholder="State" onChange={this.inputAddressHandler} />
                <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" onChange={this.inputAddressHandler} />
                <input type="email" name="email" id="email" placeholder="Your Mail" onChange={this.inputHandler}/>

                <Button btnType="Success" clicked={this.orderhandler}>ORDER</Button>

            </form>
        )

        if(this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className="ContactData">
                <h4>Enter your Contact Detail</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
