import React from 'react'

const Header = ({ completedTodoNum, totalTodos }) => {
    return (
      <header>
        <div>
        <h1>Todos</h1>
        <p>Todo List App Using React.</p>
        </div>        
        <div id="todoStatus">
          <div id="totalComp">
            <span id="totalCompleted" className="countData">
              {completedTodoNum}
            </span>
            <span className="countName">Comp.</span>
          </div>
          <div id="totalNum">
            <span id="totalTodos" className="countData">
              {totalTodos}
            </span>
            <span className="countName">Total</span>
          </div>
        </div>
      </header>
    );
  };

export default Header