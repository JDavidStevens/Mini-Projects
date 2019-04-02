import {observable, action, computed} from 'mobx';

class Todo {
    @observable value
    @observable id
    @observable complete

    constructor(value){
        this.value=value;
        this.id=Date.now()
        this.complete=false
    }
}

class TodoStore{
    @observable todos = [];
    @observable filter = '';

    @action addTodo = todo => {
        this.todos.push(new Todo(todo))
    };
    @action removeTodo = todo =>{
        this.todos.splice(this.todos.indexOf(todo),1)
    };
    @action clearComplete = () =>{
        const incompleteTodos =this.todos.filter(todo=>!todo.complete)
        this.todos.replace(incompleteTodos)
    }
    @action clearList =()=>{
        this.todos = []
    }
    @computed get filteredTodos(){
        const matchesFilter = new RegExp(this.filter,'i')
        return this.todos.filter(todo=>!this.filter||matchesFilter.test(todo.value))
    }
    @computed get todoCount(){
        return this.todos.length;
    }
}

const store = new TodoStore();
export default store;

