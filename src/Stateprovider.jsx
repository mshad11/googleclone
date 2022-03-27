//To create context 
import React, { createContext, useContext, useReducer} from 'react';

export const stateContext = createContext();

 export const Stateprovider = ({reducer,initialState, children}) =>(

    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
 )
export const useStateValue = () => useContext(stateContext)