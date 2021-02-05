import { useState } from 'react';

import logo from './to-do-list.png';
import './App.css';
import Todo from './Components/Todo';

import TodoForm from './Components/TodoForm';

import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [todos, setTodos] = useState([
    {
      task: 'Start todo',
      isComplete: true
    },
    {
      task: 'Finish todo',
      isComplete: false
    }
  ]);

  const addTodo = task => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAllTodo = () => {
    const newTodos = [];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <Container fluid>
          <h2>Todo List App</h2>

          { todos.map( (todo, index) => (<Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />))}
          
          <br/>

          <TodoForm addTodo={addTodo} />

          <br/>
            <Button onClick={() => removeAllTodo()}>Clear Todo List</Button> 
        </Container>
      </header>
    </div>
  );
}

export default App;
