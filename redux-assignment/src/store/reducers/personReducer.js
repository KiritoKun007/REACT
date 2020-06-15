const initialState = {
    persons: []
}

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Ashish',
                age: Math.floor( Math.random() * 40 )
            }

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case 'DELETE_PERSON': 
            const newPersons = state.persons.filter(person => person.id !== action.id)
            
            return {
                ...state,
                persons: newPersons
            }
    
        default:
            break;
    }
    return state
}

export default personReducer