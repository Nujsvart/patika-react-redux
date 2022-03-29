import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../redux/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.todos.items);
  const activeFilter = useSelector(state => state.todos.activeFilter);

  const filteredItems = () => {
    switch (activeFilter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.completed);
      case "completed":
        return items.filter(item => item.completed);
      default:
        return items;
    }
  };

  console.log(items);
  return (
    <ul className="todo-list">
      {filteredItems().map(item => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(todoActions.toggle(item.id))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(todoActions.deleteTodo(item.id))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
