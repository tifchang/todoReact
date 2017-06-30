import React from 'react';
import ReactDOM from 'react-dom';

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

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ul className="ul">
          {this.props.todos.map((task) => (
            <Todo task={task}/>
          ))}
        </ul>
      </div>
    )
  }

}

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var strikethrough = {
      "text-decoration": "line-through"
    }
      if(this.props.task.completed) {
        return(<li key={this.props.task} className="items" style={strikethrough}><button>X</button>{this.props.task.taskText}</li>)
      } else {
        return(<li key={this.props.task} className="items"><button>X</button> {this.props.task.taskText}</li>)
      }
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({inputText: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return(
      <form className="form">
        <input type="text" value={this.state.inputText} onChange={(e) => this.handleChange(e)} placeholder="Input task here"></input>
        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Add todo"></input>
      </form>
    )
  }
}

ReactDOM.render(<TodoApp/>,
  document.getElementById('root'));
