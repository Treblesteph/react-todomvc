import React, { Component } from 'react'
import TodoApp from "../TodoApp";

import './App.scss'

class App extends Component {
  render () {
    return (
      <div styleName="wrapper">
        <header><h1 styleName='title'>todos</h1></header>
        <section><TodoApp /></section>
        <footer styleName='footnotes'>
          <small styleName='footnote'>Double-click to edit a todo</small>
          <small styleName='footnote'>Written by <a styleName='footlink' href="http://github.com/treblesteph" target="_blank">Stephanie Unna</a></small>
          <small styleName='footnote'>Part of <a styleName='footlink' href="http://todomvc.com" target="_blank">TodoMVC</a></small>
        </footer>
      </div>
    )
  }
}

export default App
