import { useState } from 'react';

import logo from './to-do-list.png';
import './App.css';
import Todo from './Components/Todo';

import TodoForm from './Components/TodoForm';

// Import needed info from react boot strap / reactstrap
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // Use state that messes with the todos and if they are completed
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

  // This adds the todo to the setState
  const addTodo = task => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  // This makes the isComplete true
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  // This removes the todo from list
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // This removes all of the todos from list
  const removeAllTodo = () => {
    const newTodos = [];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">

        {/* Logo on top of app */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Container from reactstrap. Is fluid and makes it easier when screen size changes */}
        <Container fluid>
          <h2>Todo List App</h2>

          {/* Maps each todo with appropriate info */}
          { todos.map( (todo, index) => (<Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />))}
          
          <br/>

          {/* Show the todo form that takes in input from user */}
          <TodoForm addTodo={addTodo} />

          <br/>
            {/* Button from reactstrap that removes all of the todos from list */}
            <Button onClick={() => removeAllTodo()}>Clear Todo List</Button> 
        </Container>
      </header>
    </div>
  );
}

export default App;
