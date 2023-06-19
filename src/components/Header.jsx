import React from 'react'

const Header = ({completedTodoNum, totalTodos}) => {
  return (
    <header className="header">
          <h1>todos</h1>
          <div id='todoStatus'>
            <div id='totalComp'>
                <span id='totalCompleted' className=''>
                    {completedTodoNum}
                </span>
                <span className='countName'>Comp.</span>
            </div>
            <div id='totalNum'>
                <span id='totalTodos' className='countData'>
                    {totalTodos}
                </span>
                <span className='countName'>Total</span>
            </div>
          </div>
    </header>
  )
}

export default Header