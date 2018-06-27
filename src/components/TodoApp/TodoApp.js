import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddItem from "../AddItem";
import ItemList from "../ItemList";
import * as actions from "../../actions";
import { VisibilityFilters } from "../../actions"

import "./TodoApp.scss";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);

  }

  handleAddTodo = content => {
    this.props.addNewTodo(content);
  };

  handleEditTodo = (content, id) => {
    this.props.editTodo(content, id)
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  handleVisibilityFilter = (e, filter) => {
    e.target.checked;
    this.props.setVisibilityFilter(filter);
  }

  render() {
    const todoCount = this.props.todos.filter(todo => !todo.completed).length;
    return (
      <Fragment>
        <AddItem handleAddTodo={this.handleAddTodo} />
        <ItemList
          visibleTodos={this.props.todos}
          handleEditTodo={this.handleEditTodo}
          handleToggleTodo={this.handleToggleTodo}
        />
        <form>
          <p>{ todoCount } { todoCount === 1 ? "item left" : "items left" }</p>
          <div>
            <input
              type="radio"
              id="all"
              name="filter"
              checked={this.props.visibilityFilter === 'SHOW_ALL'}
              onChange={(e) => this.handleVisibilityFilter(e, 'SHOW_ALL')}
            />
            <label htmlFor="all">All</label>
          </div>

          <div>
            <input
              type="radio"
              id="active"
              name="filter"
              checked={this.props.visibilityFilter === 'SHOW_ACTIVE'}
              onChange={(e) => this.handleVisibilityFilter(e, 'SHOW_ACTIVE')}
            />
            <label htmlFor="active">Active</label>
          </div>

          <div>
            <input
              type="radio"
              id="completed"
              name="filter"
              checked={this.props.visibilityFilter === 'SHOW_COMPLETED'}
              onChange={(e) => this.handleVisibilityFilter(e, 'SHOW_COMPLETED')}
            />
            <label htmlFor="completed">Completed</label>
          </div>
          <input type="button" className="btn" value="Clear completed"></input>
        </form>
      </Fragment>
    );
  }
}

const mapPropsToState = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: content => dispatch(actions.addNewTodo(content)),
    editTodo: (content, id) => dispatch(actions.editTodo(content, id)),
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
    setVisibilityFilter: filter => dispatch(actions.setVisibilityFilter(filter))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(TodoApp);
