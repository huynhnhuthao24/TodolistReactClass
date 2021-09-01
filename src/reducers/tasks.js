var s4 =() =>{
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
var  generateId= () =>{ 
    return s4() + s4() + '-' +s4() + '-' + s4() + s4() +s4() + '-' + s4() +
    s4() + '-' + s4() + s4() + '-' + s4();
  }
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var  tasksReducers = (state = initialState, action) =>{
    switch (action.type) {
       
        case 'GET_LIST':
            return state;
        case 'SAVE_TASK':
            if(action.task.id){
                var taskEditing = {
                    id : action.task.id,
                    name : action.task.name,
                    status: action.task.status
                }
                var index = state.findIndex((x) => action.task.id  === x.id);
                state[index] = taskEditing;
            }else{
                var newTask =  {
                    id: generateId(),
                    name: action.task.name,
                    status: action.task.status
                }
                state.push(newTask);

            }
            localStorage.setItem('tasks', JSON.stringify(state) );
            return [...state];
        case 'UPDATE_STATUS_TASK':
            var id = action.id;
            var index = state.findIndex((x) => id  === x.id);
            state[index] = {
                ...state[index],
                status : !state[index].status
                
            } 
            localStorage.setItem('tasks', JSON.stringify(state) );
            return [...state];
        case 'DELETE_TASK':
            const idDelete = action.id;
            var index = state.findIndex((x) => idDelete === x.id);
            state.splice(index, 1);


            localStorage.setItem('tasks', JSON.stringify(state) );
            return[...state]
        default: return state;
    }
}

export default tasksReducers; 