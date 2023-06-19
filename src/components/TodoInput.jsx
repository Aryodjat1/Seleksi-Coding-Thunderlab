import React from 'react'

const TodoInput = ({ newTodoName, handleNewTodoNameChange, handleAddTodo }) => {
    return (
      <div id="todoInput">
        <div className="listItem">
          <input
            type="text"
            value={newTodoName}
            onChange={handleNewTodoNameChange}
            placeholder="Input here and return to add..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTodo();
              }
            }}
          />
        </div>
      </div>
    );
  };

export default TodoInput