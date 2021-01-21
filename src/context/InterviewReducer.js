// A reducer is a function which is given a state and an action. 
//Depending on the action it will transform the state and then return the new state.

export default (state, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'REMOVE_INTERVIEW':
        return {
            interview: state.interview.filter(interview => {
                return interview.id !== action.payload
            })
        }
        case 'ADD_INTERVIEW':
        return {
            interview: action.payload
        }
        case 'ADD_COMMENTS':
        return {
            interview: action.payload
        }
        case 'ADD_ANSWER':
        return {
            interview: action.payload
        }
            //.payload es el parametro que mandamos, el action es la funcion 
        /* case 'EDIT_CANDIDATE':
            const updateCandidate = action.payload;

            updateCandidate = state.candidate.map(post => {
                if(candidate.id === updateCandidate.id) {
                    return updateCandidate;

                }
                return candidate;
            })
            console.log(updateCandidate);
                return {
                    candidate: updateCandidate
                }
 */
        default: 
        return state
    }
}