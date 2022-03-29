import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../redux/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.todos.items);


  console.log(items);
  return (
    <ul className="todo-list">
      {items.map(item => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onClick={() => dispatch(todoActions.toggle(item.id))}
            />
            <label>{item.title}</label>
            <button className="destroy" onClick={() => dispatch(todoActions.deleteTodo(item.id))}></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
