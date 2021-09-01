

var initialState = false;
var  tasksReducers = (state = initialState, action) =>{
    switch (action.type) {
        case 'TOGGLE_FROM' :
            return !state;
        case 'OPEN_FROM' :
            state = true;
            return state;
        case 'CLOSE_FROM' :
            state = false;
            return state;
        default: return state;
    }
}

export default tasksReducers; 