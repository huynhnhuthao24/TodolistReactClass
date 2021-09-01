

var initialState = {
    id: '',
    name:'',
    status: false 
};
var  tasksReducers = (state = initialState, action) =>{
    switch (action.type) {
        case 'EDIT_TASK' :
            return action.task;

        default: return state;
    }
}

export default tasksReducers; 