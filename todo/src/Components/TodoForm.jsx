import React, { useState } from 'react';

function TodoForm ({ addTodo }) {
    const [value, setValue] = useState('');

    // Handle the submit text. Don't do anything if it is empty. Else add value
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        // Return form that takes input that will create new todo item
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add Todo here..." onChange={e => setValue(e.target.value)} />
        </form>
    );
}

export default TodoForm