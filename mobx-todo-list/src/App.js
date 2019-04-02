import React, { Component } from 'react';
import {inject,observer} from "mobx-react";

@inject("TodoStore")
@observer
class App extends Component {

  handleNewTodo=(e)=>{
    e.preventDefault();
    const todo=this.todo.value;
    this.props.TodoStore.addTodo(todo);
    this.todo.value='';
  }
handleDelete=(id)=>{
  this.props.TodoStore.removeTodo(id)
}

handleFilter=(e)=>{
  this.props.TodoStore.filter=e.target.value;
}

toggleComplete(todo){
  todo.complete = !todo.complete
}

  render() {
    const {clearComplete, clearList, filter,filteredTodos} = this.props.TodoStore;
    const list = filteredTodos.map((todo)=>(
      <li key={todo.id}>
      <input type="checkbox" onChange={this.toggleComplete.bind(this,todo)} value={todo.complete} checked={todo.complete}/>
      {todo.value}  
      <button onClick={id=>this.handleDelete(todo)}>Remove</button>
      </li>
    ))
    return (
      <div className="App">
      <h2>Todo List</h2>
      <form onSubmit={e=>this.handleNewTodo(e)}>
      <input type="text" placeholder="new item" ref={input=>this.todo=input}/>
      <button>Add Item</button>
      </form>
      <input value={filter} placeholder="filter" onChange={this.handleFilter}/> 
      <ul>        
        {list}
      </ul>
      <button onClick={clearComplete}>Clear Completed Items</button>
      <button onClick={clearList}>Clear All</button>
      </div>
    );
  }
}

export default App;

///////////////////SET UP INSTRUCTIONS///////////////////
// npm run eject
// npm install --save-dev @babel/plugin-proposal-decorators
// modify package.json Babel section (see package.json in this project for example)
// npm i mobx mobx-react
