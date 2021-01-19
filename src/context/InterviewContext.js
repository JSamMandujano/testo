import React, { createContext, useReducer } from 'react'; //entendido
import InterviewReducer from './InterviewReducer'; //se trae el file de Reducer

//Initial State

const initialInterviewState = { 
    interview: [] //posts: []
    
};

//**Create Context
//createContext es la funcion para crear un context 
//a context that will be shared within all the app.
//const MyContext = React.createContext(defaultValue) default value se refiere a initial state?

export const InterviewContext = createContext(initialInterviewState); 



//Provider Component
// For this context module to be useful at all we need to use the Provider and expose a component that provides a value
// GlobalProvider is pass to the children components in the App.js structure 

export const InterviewProvider = ({ children }) => { 
    //  Initial State = InitialValue
    // returns a stateful value(state) and a function that updates it (dispatch)
    // AppReducer is our reducer that will change in state and return a new one after actions are applied                       
const [state, dispatch] = useReducer(InterviewReducer, initialInterviewState);

const removeInterview = (id) => {
    dispatch({
        type: 'REMOVE_INTERVIEW',
        payload: id
    })
}

const addInterview = (interview) => {
    dispatch({
        type: 'ADD_INTERVIEW',
        payload: interview
    })
}


const editInterview = (interview) => {
    dispatch({
        type: 'EDIT_INTERVIEW',
        payload: interview
    })
}


// passes the Global Context with the state value and actions to the children (all the components)
return (
    <InterviewContext.Provider value={{
        interview: state.interview, //the value of the state
        removeInterview, //the actions that can change the state
        addInterview,
        editInterview
    }}>
        
        {children} 
    </InterviewContext.Provider>
)
}

