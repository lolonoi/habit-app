import React, { createContext, useReducer } from "react";

const initialState = { habitList: [] };

const store = createContext(initialState);

const {Provider} = store;

function AppProvider({children}){
    const [state, dispatch] = useReducer((state, action) => {
     switch (action.type){
        case "HABIT_LIST_CHANGE" :
            return {...state, habitList: action.habitList}; 
        default:
            return state;
     }   
    }, initialState);
    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, AppProvider};