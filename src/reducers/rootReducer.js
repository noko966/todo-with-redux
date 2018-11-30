const initialState = {
    todos: [
        {id:1, text:'some text lalala1'},
        {id:2, text:'some text lalala2'},
        {id:3, text:'some text lalala3'},
        {id:4, text:'some text lalala4'},
        {id:5, text:'some text lalala5'},
    ]
}

const rootReducer = (state = initialState, action) => {
    if(action.type === 'DELETE_TODO'){
        console.log(action);
        let newTodos = state.todos.filter(todo => 
            action.id !== todo.id
        )
        return {
            ...state,
            todos: newTodos
        }
    }
    if(action.type === 'ADD_TODO'){
        console.log(action);
        let newTodos = [...state.todos,action.obj]
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export { rootReducer };

export default rootReducer;
