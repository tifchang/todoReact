import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ul className="ul">
          {this.props.todos.map((task, i) => (
            <Todo task={task} todoXClick={() => this.props.todoXClick(i)} toggle={() => this.props.toggle(i)}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;
