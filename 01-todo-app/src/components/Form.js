import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { todoActions } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    dispatch(todoActions.addTodo({ title }));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
};

export default Form;
