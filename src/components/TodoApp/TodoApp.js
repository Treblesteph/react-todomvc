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

  handleRemoveTodo = id => {
    this.props.removeTodo(id)
  };

  handleVisibilityFilter = (e, filter) => {
    e.target.checked;
    this.props.setVisibilityFilter(filter);
  }

  handleToggleAll = () => {
    if (this.props.todos.filter(todo => todo.completed === false).length !== 0) {
      this.props.todos.map(todo => todo.completed === false ? this.props.toggleTodo(todo.id) : todo)
    } else {
      this.props.todos.map(todo => this.props.toggleTodo(todo.id))
    }
  }

  handleRemoveCompleted = () => {
    this.props.todos.map(todo => todo.completed === true ? this.props.removeTodo(todo.id) : null)
  }

  render() {
    const todoCount = this.props.todos.filter(todo => !todo.completed).length;
    return (
      <div styleName={ this.props.todos.length === 0 ? 'emptylist' : 'listwrapper' }>
        <AddItem
          todos={this.props.todos}
          handleAddTodo={this.handleAddTodo}
          handleToggleAll={this.handleToggleAll}
        />
        {this.props.todos.length !== 0 ?
          <Fragment>
            <ItemList
              visibleTodos={this.props.todos}
              handleEditTodo={this.handleEditTodo}
              handleDeleteTodo={this.handleRemoveTodo}
              handleToggleTodo={this.handleToggleTodo}
            />
            <form styleName='list-options'>
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
              <input
                type="button"
                className="btn"
                value="Clear completed"
                onClick={()=>this.handleRemoveCompleted()}
              />
            </form>
          </Fragment>: <span /> 
        }
      </div>
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
    removeTodo: id => dispatch(actions.removeTodo(id)),
    editTodo: (content, id) => dispatch(actions.editTodo(content, id)),
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
    setVisibilityFilter: filter => dispatch(actions.setVisibilityFilter(filter))
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(TodoApp);
