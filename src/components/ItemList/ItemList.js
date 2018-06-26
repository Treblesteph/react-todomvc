import React, { Component } from "react";
import TodoItem from '../TodoItem'
import "./ItemList.scss";


class ItemList extends Component {
  handleKeyPress = (e) => {
    e.key !== 'Enter' ? (
      console.log('different key pressed'),
      null) : (
        !e.target.value.trim() ? (
          console.log(e),
          console.log('this should delete the item'), 
        null) : (
          console.log('editing item'),
          e.preventDefault(),
          this.props.handleEditTodo(e.target.value)
        )
    )
  }
  render() {
    const Items = visibleTodos =>
      <ul>
        {visibleTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleClick={() => this.props.handleToggleTodo(todo.id)}
            handleKeyPress={this.handleKeyPress}
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
