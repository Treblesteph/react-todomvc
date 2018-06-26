import React, { Component } from "react";

import "./ItemList.scss";

// const mapStateToProps = state => ({
//   visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

const Items = visibleTodos =>
  <ul>
    {visibleTodos.map(todo =>
      <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    )}
  </ul>;

class ItemList extends Component {
  render() {
    const { visibleTodos } = this.props;
    return (
      <form>
        {Items(visibleTodos)}
      </form>
    );
  }
}

export default ItemList;
