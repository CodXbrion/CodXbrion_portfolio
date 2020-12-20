import React, {useContext, useReducer, useState} from 'react'
import reducer from './reducer'


const AppContext = React.createContext()
const initialState = {
    loading: false
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <AppContext.Provider value={{
            ...state,
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}