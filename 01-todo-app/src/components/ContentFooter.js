import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { todoActions, selectTodos } from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const items = useSelector(selectTodos);
  const dispatch = useDispatch();

  const itemsLeft = items.filter(item => !item.completed).length;
  const activeFilter = useSelector(state => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="/#"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(todoActions.changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(todoActions.changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/#"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() =>
              dispatch(todoActions.changeActiveFilter("completed"))
            }
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(todoActions.clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
