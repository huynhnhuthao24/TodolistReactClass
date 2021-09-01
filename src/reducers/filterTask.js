

var initialState = {
    name: '',
    status: -1 
};
var  tasksReducers = (state = initialState, action) =>{
    switch (action.type) {
        case 'FILTER_TASK' :
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status)
            };

        default: return state;
    }
}

export default tasksReducers; 