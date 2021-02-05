import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, completeTodo, removeTodo }) {

    return (
        // Return div and if todo is completed then a line-through is shown and a checkmark is added
        <div className="todo" style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
            {todo.task} 
            {todo.isComplete ? ' ✔' : ''}
           <div>
               {/* 2 buttons from the reactstrap library. 1st button makes todo marked as completed*/}
                <Button variant="success" onClick={() => completeTodo(index)}>
                    Complete
                </Button> 
                {/* 2nd button removes the todo */}
                <Button variant="danger" onClick={() => removeTodo(index)}>
                    x
                </Button>
           </div> 
        </div>
       
    )
}

export default Todo;

