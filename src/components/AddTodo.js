import React from "react";

function AddTodo(props) {
  const { todo, setTodo, handleClick } = props;

  return (
    <div>
      TodoList<br></br>
      <input
        value={todo}
        type="text"
        onChange={(event) => setTodo(event.target.value)}
      ></input>
      <button type="submit" onClick={() => handleClick()}>
        Click
      </button>
    </div>
  );
}

export default AddTodo;
