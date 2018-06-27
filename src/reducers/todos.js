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
    case "TOGGLE_TODO":
      console.log(state)
      console.log(action)
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "UPDATE_TODO":
      console.log(state)
      console.log(action)
      return state.map(
        todo =>
          todo.id === action.data.id ? { ...todo, content: action.data.content } : todo
        );
    default:
      return state;
  }
};

export default todos;
