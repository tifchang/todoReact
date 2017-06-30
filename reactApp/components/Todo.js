import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  strikethrough(e){
    e.preventDefault();

  }
  render() {
      if(this.props.task.completed) {
        return(<li key={this.props.task} className="items strikethrough" onClick={this.props.toggle}><button onClick={this.props.todoXClick}>X</button>{this.props.task.taskText}</li>)
      } else {
        return(<li key={this.props.task} className="items" onClick={this.props.toggle}><button onClick={this.props.todoXClick}>X</button> {this.props.task.taskText}</li>)
      }
  }
}

export default Todo;
