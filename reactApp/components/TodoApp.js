import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{taskText: 'Take out the trash', completed: false},
{taskText: 'Walk the dog', completed: false}, {taskText: 'Clean the room', completed: true}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],

    }
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  }
  render() {
    return(
      <div>
        <h1 className="header">Todo List</h1>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
