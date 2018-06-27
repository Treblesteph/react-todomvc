import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddItem from "../AddItem";
import ItemList from "../ItemList";
import * as actions from "../../actions";

import "./TodoApp.scss";

class TodoApp extends Component {
  constructor(props) {
    super(props);

  }

  handleAddTodo = content => {
    this.props.addNewTodo(content);
  };

  handleEditTodo = (content, id) => {
    console.log("content: " + content)
    console.log("id: " + id)
    this.props.editTodo(content, id)
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <Fragment>
        <AddItem handleAddTodo={this.handleAddTodo} />
        <ItemList
          visibleTodos={this.props.todos}
          handleEditTodo={this.handleEditTodo}
          handleToggleTodo={this.handleToggleTodo}
        />
        {/* <form>
          <p>1 item left</p>
          <div>
            <input type="radio" id="all" name="filter" checked />
            <label for="all">All</label>
          </div>

          <div>
            <input type="radio" id="active" name="filter" />
            <label for="active">Active</label>
          </div>

          <div>
            <input type="radio" id="completed" name="filter" />
            <label for="completed">Completed</label>
          </div>
          <input type="button" className="btn" value="Clear completed"></input>
        </form> */}
      </Fragment>
    );
  }
}

const mapPropsToState = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: content => dispatch(actions.addNewTodo(content)),
    editTodo: (content, id) => dispatch(actions.editTodo(content, id)),
    toggleTodo: id => dispatch(actions.toggleTodo(id))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(TodoApp);
