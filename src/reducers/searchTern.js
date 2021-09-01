

var initialState = '';
var  tasksReducers = (state = initialState, action) =>{
    switch (action.type) {
        case 'SEARCH_TASK' :
            return action.searchTern;
        default: return state;
    }
}

export default tasksReducers; 