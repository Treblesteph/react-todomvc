let nextTodoId = 0;

const addNewTodo = content => ({
  type: "ADD_TODO",
  data: {
    id: nextTodoId++,
    content
  }
});

const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

const updateTodo = id => ({
  type: "UPDATE_TODO",
  id
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

export { addNewTodo, toggleTodo, setVisibilityFilter, updateTodo, VisibilityFilters };
