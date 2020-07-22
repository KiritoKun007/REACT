import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null, 
    totalPrice: 30,
    error: false,
}

const ingredient_prices = {
    salad: 7,
    cheese: 28,
    meat: 39,
    bacon: 11
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient.name]: state.ingredients[action.ingredient.name] + 1
                },
                totalPrice: state.totalPrice + ingredient_prices[action.ingredient.name]
            }
    
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient.name]: state.ingredients[action.ingredient.name] - 1
                },
                totalPrice: state.totalPrice - ingredient_prices[action.ingredient.name]
            }

        case actionTypes.SET_INGREDIENTS: 
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 30,
                error: false
            }

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };

        default:
            return state
    }
}

export default reducer


