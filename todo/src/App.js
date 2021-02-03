// import logo from './logo.svg';
import {useState} from 'react';

import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';

import TodoForm from './Components/TodoForm';

function App() {

  // const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!

  const [todos, setTodos] = useState([
    {
      task: 'Start todo',
      isComplete: false
    },
    {
      task: 'Finish todo',
      isComplete: false
    },
    {
      task: 'todo',
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

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
         <br/>
          <p>Create a Todo List App</p>
          {/* <Todo item="1"/>
          <Todo item="2"/>
          <Todo item="3"/> */}

          { todos.map( (todo, index) => (<Todo key={index} todo={todo} index={index} completeTodo={completeTodo} />))}
          
          <TodoForm addTodo={addTodo} />


          {/* {todos.map( (t,i) => <Todo key={i} item={t}/>)} */}
        </div>
      </header>
    </div>
  );
}

export default App;
