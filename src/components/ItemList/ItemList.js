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
      <ul styleName='item-wrapper'>
        {visibleTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClick={() => this.props.handleToggleTodo(todo.id)}
            handleDeleteTodo={this.props.handleDeleteTodo}
            handleChangeTodo={this.handleChangeTodo}
          />
        )}
      </ul>;
    const { visibleTodos } = this.props;
    return (
      <form styleName='todolist'>
        {Items(visibleTodos)}
      </form>
    );
  }
}

export default ItemList;
