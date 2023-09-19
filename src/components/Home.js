import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "watching ytb" },
    { id: "todo2", name: "using fb" },
    { id: "todo3", name: "reading b" },
  ]);

  const handleClick = () => {
    let todoItem = {
      id: "abc",
      name: todo,
    };
    // setListTodo([...listTodo, todoItem]);
    let currentTodo = _.clone(listTodo);
    currentTodo.push(todoItem);
    setListTodo(currentTodo);
    setTodo("");
    console.log(listTodo);
  };

  const handleDeleteTodo = (id) => {
    let currentTodo = _.clone(listTodo);
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setListTodo(currentTodo);
  };

  const myInfo = {
    age: 25,
    address: "vn",
  };

  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleClick={handleClick} />

      <DisplayTodo
        childData={listTodo}
        name={"khanh"}
        myInfor={myInfo}
        Delete={handleDeleteTodo}
      />
      <br></br>
    </div>
  );
}

export default TodoList;
