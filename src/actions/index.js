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

const editTodo = (id, content) => ({
  type: "UPDATE_TODO",
  id,
  content
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

export { addNewTodo, toggleTodo, setVisibilityFilter, editTodo, VisibilityFilters };
