import React, { useState } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState([]);
  const handelAdd = () => {
    setToDo([...toDo, text]);
    setText("");
  };
  const handelDelet = (item, id) => {
    const deleteTask = toDo.filter((elem, index) => index !== id);
    setToDo(deleteTask);
  };
  const handelSearch = (value) => {
    const searchItem = toDo.filter((elem) =>
      elem.toUpperCase().includes(value.toUpperCase())
    );
    setToDo(searchItem);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => handelSearch(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Add word
            "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <button onClick={() => handelAdd()}>Add</button>
      <ol>
        {toDo.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => handelDelet(item, index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
