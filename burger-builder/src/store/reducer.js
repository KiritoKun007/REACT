import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    }, 
    totalPrice: 30
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

        default:
            return state
    }
}

export default reducer


