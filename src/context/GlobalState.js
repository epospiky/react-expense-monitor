import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions : [
        {id:1, name:"Paper", amount:-150},
        {id:2, name:"Charger", amount:-150},
        {id:3, name:"Wage", amount:550},
        {id:4, name:"Credit", amount:150}

    ]
}


export const  GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);
   
    const deleteTransaction = (id) =>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    const addTransaction = (transaction) =>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction, 
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>
}



