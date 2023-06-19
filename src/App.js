import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodoName, setNewTodoName] = useState([]);
  const [todoId, setTodoId] = useState([]);
  
  useEffect(() => {
    readLocalStorage();
  }, []);

  useEffect(()=> {
    writeLocalStorage();
  }, [todoList]);

  const readLocalStorage = () => {
    const data = localStorage.getItem('todoList');
    if (data) {
      setTodoList(JSON.parse(data));
      setTodoList(JSON.parse(data).length);
    }
  }

  const writeLocalStorage = () =>{
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  const addTodo = () =>{
    setTodoList([...todoList, {
      id: todoId,
      name: newTodoName,
      done: false
    },]);
        setNewTodoName('');
        setTodoId((prevId)=>prevId+1);
  }

  const toggleTodo = (id) => {
    setTodoList((prevTodoList) =>
    prevTodoList.filter((todo) => todo.id!== id).map((todo)=>{
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    }))
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) =>todo.id !== id));
  }

  const completedTodoNum = todoList.filter((todo) => todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div>
      <Header completedTodoNum={completedTodoNum} totalTodos={totalTodos} />
      <main>
        <TodoInput
          newTodoName={newTodoName}
          handleNewTodoNameChange={(e) => setNewTodoName(e.target.value)}
          handleAddTodo={addTodo}
        />
        <div id="todoList">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodo={toggleTodo}
              handleRemoveTodo={removeTodo}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App