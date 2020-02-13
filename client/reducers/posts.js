// a reducers takes in two things:
// 1. the action (info about what happened)
// 2. compy of the current state

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes+1},
                ...state.slice(i+1)
            ]
            break;
    
        default:
            return state;
            break;
    }
}
export default posts;