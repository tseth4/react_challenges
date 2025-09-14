import React, { useState, useEffect } from 'react';

const TodoListStarter: React.FC = () => {
  const [toDoList, setToDoList] = useState<string[]>([])
  const [error, setError] = useState<string>("")
  const [toDo, setToDo] = useState<string>("")

  const validate = (toDo: string) => {
    let errorMessage = ""
    if (toDo.length == 0) {
      errorMessage = "Input is empty"
    }
    return { isValid: errorMessage.length == 0, errorMessage }
  }
  const handleSubmit = () => {
    console.log("submit")
    setError("")
    const { isValid, errorMessage } = validate(toDo)
    if (isValid) {
      setToDoList((prev) => [...prev, toDo])
      setToDo("")
      return
    }
    setError(errorMessage)
    setToDo("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setToDo(value)
  }

  const onDelete = (index: number) => {
    setToDoList((prev) => {
      // slice(inclusive, exclusive)
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit()
    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input onKeyDown={handleKeyDown} onChange={handleChange} value={toDo} type="text" placeholder="Add your task" />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {error.length > 0 ? (
          <div>{error}</div>
        ) : ""}
      </div>
      <ul>
        {toDoList.map((t, i) => (
          <li key={i}>
            <span>{t}</span>
            <button onClick={() => onDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListStarter; 