import React, { createContext, useReducer } from 'react'; //entendido
import AppReducer from './AppReducer'; //se trae el file de Reducer

//Initial State

const initialState = { //entendido
    posts: []
    
};

//**Create Context
//createContext es la funcion para crear un context 
//a context that will be shared within all the app.
//const MyContext = React.createContext(defaultValue) default value se refiere a initial state?

export const GlobalContext = createContext(initialState);




//Provider Component
// For this context module to be useful at all we need to use the Provider and expose a component that provides a value
// GlobalProvider is pass to the children components in the App.js structure 

export const GlobalProvider = ({ children }) => { 
                       //  Initial State = InitialValue
                       // returns a stateful value(state) and a function that updates it (dispatch)
                       // AppReducer is our reducer that will change in state and return a new one after actions are applied                       
    const [state, dispatch] = useReducer(AppReducer, initialState);


//Actions 
// naming convention for the property that holds the actual data
//These are objects that are used to send data to the Redux store.

//They typically have two properties: a type property for describing what the action does 
//and a payload property that contains the information that should be changed in the app state.

const removePost = (id) => {
    dispatch({
        type: 'REMOVE_POST',
        payload: id
    })
}

const addPost = (post) => {
    dispatch({
        type: 'ADD_POST',
        payload: post
    })
}


const editPost = (post) => {
    dispatch({
        type: 'EDIT_POST',
        payload: post
    })
}



// passes the Global Context with the state value and actions to the children (all the components)
    return (
        <GlobalContext.Provider value={{
            posts: state.posts, //the value of the state
            removePost, //the actions that can change the state
            addPost,
            editPost
        }}>
            
            {children} 
        </GlobalContext.Provider>
    )
}
