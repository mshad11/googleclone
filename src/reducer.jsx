//We have to now store the data.For that we are using use Reducer + Context API
//Creating Initial state
export const initialState = {
    //term is just an variable here
    term: null
}

//Creatng action as an object
export const action = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}

//creating reducer
const reducer = (state,action) => {
    switch(action.type){
        case 'SET_SEARCH_TERM':
            return{
                ...state, term:action.term
            }
            default: 
            return state
    }
}
export default reducer;