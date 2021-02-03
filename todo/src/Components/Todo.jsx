import React from 'react'

function Todo({ todo, index }) {
    return (
        <div className="todo">
           {todo.task}
        </div>
    )
}

export default Todo;

