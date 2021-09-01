export const getList = () => {
    return {
        type: 'GET_TASKS'
    }
};
export const saveTask = (task) =>{
    return{
        type: 'SAVE_TASK',
        task
    }
}
export const toggleFrom = () => {
    return {
        type: 'TOGGLE_FROM'
    }
};
export const openFrom = () => {
    return {
        type: 'OPEN_FROM'
    }
};
export const closeFrom = () => {
    return {
        type: 'CLOSE_FROM'
    }
};
export const updateStatusTask = (id) => {
    return {
        type: 'UPDATE_STATUS_TASK',
        id : id
    }
};
export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id : id
    }
};
export const editTask = (task) => {
    return {
        type: 'EDIT_TASK',
        task : task
    }
};
export const filterTask = (filter) => {
    return {
        type: 'FILTER_TASK',
        filter : filter
    }
};
export const searchTask = (searchTern) => {
    return {
        type: 'SEARCH_TASK',
        searchTern
    }
};

