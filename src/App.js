import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/create-todo/CreateTodo';
import Todo from './components/todo/Todo';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { id: 1, text: "Выполнить д/з", status: false },
        { id: 2, text: "Купить сахар", status: true },
        { id: 3, text: "Купить соль", status: false },
      ],
      isLoading: true,
    }
    this.createTodo = this.createTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    console.log('Did mount')
    const data = JSON.parse(localStorage.getItem('todo')) || [];
    this.setState({ todolist: data })

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2500)
  }

  componentDidUpdate() {
    console.log('Did update')
    localStorage.setItem('todo', JSON.stringify(this.state.todolist))
  }

  componentWillUnmount() {
    console.log('Will unmount')
  }

  createTodo(str) {
    this.setState({
      todolist: [...this.state.todolist, {
        id: Math.random(),
        text: str,
        status: false
      }]
    });
  };

  changeStatus(id) {
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, status: !item.status }
        return newObj
        // item.status = !item.status (нельзя так делать!)
      };
      return item
    });
    this.setState({ todolist: newArr });
  };

  onDelete(id) {
    const newArr = this.state.todolist.filter((todo) => todo.id !== id)
    this.setState({ todolist: newArr })
  }

  onEdit(id, text) {
    const newArray = this.state.todolist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text
        }
      }
      return todo
    });
    this.setState({ todolist: newArray })
  };

  render() {
    if (this.state.isLoading) {
      return <div className='loader'>
        <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt="loader" />
      </div>
    }
    return (
      <div className="App">
        <div className='todo-wrapper'>
          <Header count={this.state.todolist.length}
            countDone={this.state.todolist.length} />

          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo} />
            <div className='mt-2 todo-list'>
              {
                this.state.todolist.map((todo) => <Todo
                  key={todo.id}
                  changeStatus={this.changeStatus}
                  id={todo.id}
                  text={todo.text}
                  status={todo.status}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
                )}
            </div>
          </div>
        </div>
        </div>
    )   
  }
}


export default App;
