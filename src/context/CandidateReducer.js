// A reducer is a function which is given a state and an action. 
//Depending on the action it will transform the state and then return the new state.

export default (state, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'REMOVE_CANDIDATE':
        return {
            candidate: state.candidate.filter(candidate => {
                return candidate.id !== action.payload
            })
        }
        case 'ADD_CANDIDATE':
        return {
            candidate: action.payload
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