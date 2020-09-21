import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({
        todos: todos
      }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todo => this.setState(
        state => {
          const newArr = state.todos.concat(todo);
          return { todos: newArr };
        }))
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    const todoIndex = this.state.todos.findIndex(todo => todo.id === todoId);
    const task = this.state.todos[todoIndex].task;
    const isCompleted = this.state.todos[todoIndex].isCompleted;
    const newObj = {
      id: todoId,
      task: task,
      isCompleted: !isCompleted
    };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todo =>
        this.setState(state => {
          const todosCopy = state.todos.slice();
          todosCopy[todoIndex] = todo;
          return { todos: todosCopy };
        }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
