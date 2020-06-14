import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT: 
            return {
                ...state, 
                results: state.results.concat({ id: new Date() ,val: action.result})
            }

        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // let newResult = [...state.results]
            // newResult.splice(id, 1)

            const newResult = state.results.filter(result => {
                return result.id !== action.id
            })

            return {
                ...state,
                results: newResult
            }
    
        default:
            break;
    }
    return state
}

export default resultsReducer