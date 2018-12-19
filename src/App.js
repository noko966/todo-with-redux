import React from 'react';
// import { render } from 'react-dom';
// import { space, width, fontSize, color } from 'styled-system';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { connect } from 'react-redux';
import Box from './blocks/box'
import Input from './blocks/Input'
import './App.css'

import { deleteTodo, addTodo } from './actions'

import Icon from './elements/icon'
import IconGenerator from './utils/iconGenerator'



class App extends React.Component {
  handleDelete = (id) => {
    this.props.deletePost(id)
  }
  handleAdd = (e) => {
    if(e.keyCode === 13){
      var val = e.target.value;
      var newTodo = {
        id: Math.random(),
        text: val
      }
      this.props.addPost(newTodo);
      e.target.value = '';
    }
  }
  
  render(){
    console.log(this.props);
    const { todos } = this.props;
    console.log(todos)
    return (
    <ThemeProvider theme={theme}>
      <Box width='4' mx='auto'>
        <Input outline='3' p={2} height='1' bg='near-white' width='100%' mb={2} onKeyDown={(e) => this.handleAdd(e)} type="text"/>
      {todos.map((todo)=>
        <Box p={2} bg='light-silver' height='1' color='black' w='100%' mb={2} key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => this.handleDelete(todo.id)}>delete</button>
        </Box>
        
      )}
      <Icon/>
      <Icon sportId = {1}/>
      <Icon sportId = {2}/>
      <Icon sportId = {3}/>

        <IconGenerator/>
      </Box>
    </ThemeProvider>
    )
  }
  
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deleteTodo(id))},
    addPost: (obj) => {dispatch(addTodo(obj))}
  }
}

//render(<App />, document.getElementById('root'));

export default connect(mapStateToProps, mapDispatchToProps)(App);