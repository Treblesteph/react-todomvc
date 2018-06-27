const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          ...action.data,
          completed: false
        }
      ];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "UPDATE_TODO":
      return state.map(
        todo =>
          todo.id === action.data.id ? { ...todo, content: action.data.content } : todo
        );
    default:
      return state;
  }
};

export default todos;
