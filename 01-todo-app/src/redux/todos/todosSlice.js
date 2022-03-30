import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn JavaScript",
        completed: true,
      },
      {
        id: "2",
        title: "Learn React",
        completed: false,
      },
      {
        id: "3",
        title: "Have a life!",
        completed: false,
      },
      {
        id: "4",
        title: "Learn Redux",
        completed: false,
      },
      {
        id: "5",
        title: "Learn React Native",
        completed: false,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.completed = !item.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: state => {
      state.items = state.items.filter(item => !item.completed);
    },
  },
});

export const selectFilteredTodos = state => {
  switch (state.todos.activeFilter) {
    case "all":
      return state.todos.items;
    case "active":
      return state.todos.items.filter(item => !item.completed);
    case "completed":
      return state.todos.items.filter(item => item.completed);
    default:
      return state.todos.items;
  }
};

export const selectTodos = state => state.todos.items;

export const todoActions = todosSlice.actions;

export default todosSlice.reducer;
