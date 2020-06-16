import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);

    return updateObject(state, { results: updatedArray })
}

const storeResult = (state, action) => {
    const newResults = state.results.concat({
        id: new Date(), 
        value: action.result
    })

    return updateObject(state, { results: newResults })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return storeResult(state, action)
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action)
        default: 
            return state
    }
};

export default reducer;