import React from 'react'

const TodoItem = ({todo, handleToggleTodo, handleRemoveTodo}) => {
  return (
    <div className='listItem'>
        <div 
            className={todo.done ? 'todoNameDone' : 'todoName'}
            onClick={() => handleToggleTodo(todo.id)}
        >
            {todo.name}
        </div>
        <button onClick={()=> handleRemoveTodo(todo.id)}>x</button>
    </div>
  )
}

export default TodoItem