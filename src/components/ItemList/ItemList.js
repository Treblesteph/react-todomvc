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
          this.props.editTodo(e.target.value)
        )
    )
  }
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
