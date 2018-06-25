import React, { Component } from 'react'
import TodoApp from "../TodoApp";

import './App.scss'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <header><h1>todos</h1></header>
        <section><TodoApp /></section>
        <footer>
          <small>Double-click to edit a todo</small>
          <small>Written by <a href="http://github.com/treblesteph" target="_blank">Stephanie Unna</a></small>
          <small>Part of <a href="http://todomvc.com" target="_blank">TodoMVC</a></small>
        </footer>
      </React.Fragment>
    )
  }
}

export default App