import React from 'react'

const Todo = ({ handleClick, handleKeyPress, todo }) => (
  <li>
    <input onClick={handleClick} type="checkbox" id={todo.id} name="todoitem" value="item1" />
    <label
      htmlFor={todo.id}
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
      <p
        onDoubleClick={(e) => (
          e.target.contentEditable=true,
          e.target.className='inEdit',
          e.target.onKeyPress={handleKeyPress}
        )}
        onBlur={(e) => (e.target.contentEditable=false, e.target.className='')}
        contentEditable="false"
        className=""
      >
        {todo.content}
      </p>
    </label>
  </li>
)

export default Todo