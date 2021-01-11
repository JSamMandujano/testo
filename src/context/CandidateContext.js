import React, { createContext, useReducer } from 'react'; //entendido
import CandidateReducer from './CandidateReducer'; //se trae el file de Reducer

//Initial State

const initialCandidateState = { 
    candidate: {} //posts: []
    
};

//**Create Context
//createContext es la funcion para crear un context 
//a context that will be shared within all the app.
//const MyContext = React.createContext(defaultValue) default value se refiere a initial state?

export const CandidateContext = createContext(initialCandidateState); 

//export const GlobalContext = createContext(initialState); 





//Provider Component
// For this context module to be useful at all we need to use the Provider and expose a component that provides a value
// GlobalProvider is pass to the children components in the App.js structure 

export const CandidateProvider = ({ children }) => { 
                       //  Initial State = InitialValue
                       // returns a stateful value(state) and a function that updates it (dispatch)
                       // AppReducer is our reducer that will change in state and return a new one after actions are applied                       
    const [state, dispatch] = useReducer(CandidateReducer, initialCandidateState);


//Actions 
// naming convention for the property that holds the actual data
//These are objects that are used to send data to the Redux store.

//They typically have two properties: a type property for describing what the action does 
//and a payload property that contains the information that should be changed in the app state.

const removeCandidate = (id) => {
    dispatch({
        type: 'REMOVE_CANDIDATE',
        payload: id
    })
}

const addCandidate = (candidate) => {
    dispatch({
        type: 'ADD_CANDIDATE',
        payload: candidate
    })
}


const editCandidate = (candidate) => {
    dispatch({
        type: 'EDIT_CANDIDATE',
        payload: candidate
    })
}



// passes the Global Context with the state value and actions to the children (all the components)
    return (
        <CandidateContext.Provider value={{
            candidate: state.candidate, //the value of the state
            removeCandidate, //the actions that can change the state
            addCandidate,
            editCandidate
        }}>
            
            {children} 
        </CandidateContext.Provider>
    )
}
