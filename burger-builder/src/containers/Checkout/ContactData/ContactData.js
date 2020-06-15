import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import './ContactData.scss'

import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    name: 'street',
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    name: 'city',
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    name: 'state',
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    name: 'zipcode',
                    type: 'text',
                    placeholder: 'zipcode'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    name: 'deliveryMethod',
                    options: [
                        { value: '', displayValue: 'Select Delivery Method' },
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: 'fastest',
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    }

    orderhandler = (e) => {
        e.preventDefault()

        this.setState((prevState) => {
            return {loading: !prevState.loading}
        })

        const formData = {}

        for ( let formElementName in this.state.orderForm ) {
            formData[formElementName] = this.state.orderForm[formElementName].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
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

    checkValidity(value, rules) {
        let isValid = true
        let validationMsg = ''

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
            validationMsg = 'This field is required.'
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
            validationMsg = 'Zipcode should be of length 6.'
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
            validationMsg = 'Zipcode should be of length 6.'
        }

        return {
            isValid: isValid,
            message: validationMsg
        }
    }

    inputHandler = (e) => {
        e.preventDefault();

        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[e.target.name]
        }

        updatedFormElement.value = e.target.value

        let validationObj = {}
        if(updatedFormElement.validation) {
            validationObj = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)

            updatedFormElement.valid = validationObj.isValid
            updatedFormElement.validationMessage = validationObj.message
        }
        updatedFormElement.touched = true

        console.log(updatedFormElement)

        updatedOrderForm[e.target.name] = updatedFormElement

        let formIsValid = true

        for ( let key in updatedOrderForm ) {
            formIsValid = updatedOrderForm[key].valid && formIsValid
        }

        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        })
    }

    render() {

        const formElementArray = []
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                ...this.state.orderForm[key]
            })
        }
        console.log(formElementArray)

        let form = (
            <form onSubmit={this.orderhandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.elementType}
                        elementConfig={formElement.elementConfig}
                        value={formElement.value}
                        label={formElement.id}
                        inputHandler={this.inputHandler}
                        inValid={!formElement.valid}
                        shouldValidate={formElement.validation}
                        touched={formElement.touched}
                        validationErrorMsg={formElement.validationMessage} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>

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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData)
