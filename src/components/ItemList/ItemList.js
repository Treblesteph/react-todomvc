import React, { Component } from "react";
import TodoItem from '../TodoItem'
import "./ItemList.scss";


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
