export const deleteTodo = (id) => {
    return{
        type: 'DELETE_TODO',
        id: id
    }
}

export const addTodo = (obj) => {
    return{
        type: 'ADD_TODO',
        obj: obj
    }
}
