import React, { Component } from "react";
import { connect } from "react-redux";
import AddItem from "../AddItem";
import ItemList from "../ItemList";
import * as actions from '../../actions'

import "./TodoApp.scss";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleTodos: []
    };
  }

  handleAddTodo = content => {
    this.props.addNewTodo(content);
  };

  handleEditTodo = (id, content) => {
    this.props.editTodo(id, content)
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <React.Fragment>
        <AddItem handleAddTodo={this.handleAddTodo} />
        <ItemList visibleTodos={this.state.visibleTodos} />
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
      </React.Fragment>
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
    addNewTodo: todo => dispatch(actions.addNewTodo(todo)),
    editTodo: todo => dispatch(actions.editTodo(todo)),
    toggleTodo: todo => dispatch(actions.toggleTodo(todo))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(TodoApp);
