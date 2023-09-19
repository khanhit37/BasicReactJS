import React from "react";

function DisplayTodo(props) {
  const DeleteTodo = (id) => {
    props.Delete(id);
  };

  const listTodo = props.childData;
  return (
    <div>
      {listTodo.map((item, index) => {
        return (
          <div id={item.id} onClick={() => DeleteTodo(item.id)}>
            {item.name}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default DisplayTodo;
