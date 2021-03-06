// A reducer is a function which is given a state and an action. 
//Depending on the action it will transform the state and then return the new state.

export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_POST':
        return {
            posts: state.posts.filter(post => {
                return post.id !== action.payload
            })
        }
        case 'ADD_POST':
        return {
            posts: [action.payload, ...state.posts]
        }

        case 'EDIT_POST':
            const updatePost = action.payload;

            const updatePosts = state.posts.map(post => {
                if(post.id === updatePost.id) {
                    return updatePost;

                }
                return post;
            })
            console.log(updatePosts);
                return {
                    posts: updatePosts
                }

        default: 
        return state
    }
}