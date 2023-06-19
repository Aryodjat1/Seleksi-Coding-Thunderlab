import React from 'react'

const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }) => {
    return (
      <div className='todoList'>
        <div className="listItem">
        <div
          className={todo.done ? 'todoNameDone' : 'todoName'}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.name}
        </div>
        <button onClick={() => handleRemoveTodo(todo.id)}>×</button>
      </div>
      </div>
    );
  };

export default TodoItem