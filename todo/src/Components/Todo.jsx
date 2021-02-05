import React, { useState } from 'react';

import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, completeTodo, removeTodo }) {

    return (
        <div className="todo" style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
            {todo.task} 
            {todo.isComplete ? ' ✔' : ''}
           <div>
                <Button variant="success" onClick={() => completeTodo(index)}>
                    Complete
                </Button> 
                
                <Button variant="danger" onClick={() => removeTodo(index)}>
                    x
                </Button>
           </div> 
        </div>
       
    )
}

export default Todo;

