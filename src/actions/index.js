let nextTodoId = 0;

const addNewTodo = content => ({
  type: "ADD_TODO",
  data: {
    id: nextTodoId++,
    content
  }
});

const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

const editTodo = (content, id) => ({
  type: "UPDATE_TODO",
  data: {
    id,
    content
  }
});

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export { addNewTodo, removeTodo, toggleTodo, setVisibilityFilter, editTodo, VisibilityFilters };
