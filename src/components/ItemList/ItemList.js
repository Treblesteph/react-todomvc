import React, { Component } from "react";
import TodoItem from '../TodoItem'
import "./ItemList.scss";


class ItemList extends Component {
  handleChangeTodo = (e, id) => {
    console.log("event target value: " + e.target.value)
    console.log("item id: " + id)
    this.props.handleEditTodo(e.target.value, id)
  }
  render() {
    const Items = visibleTodos =>
      <ul>
        {visibleTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClick={() => this.props.handleToggleTodo(todo.id)}
            handleChangeTodo={this.handleChangeTodo}
          />
        )}
      </ul>;
    const { visibleTodos } = this.props;
    return (
      <form>
        {Items(visibleTodos)}
      </form>
    );
  }
}

export default ItemList;
