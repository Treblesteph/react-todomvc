import React from 'react'
import '../../styles/mixins.scss';

const Todo = ({ handleClick, handleKeyPress, todo }) => (
  <li>
    <input onClick={handleClick} type="checkbox" id={todo.id} name="todoitem" value="item1" />
    <label
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
      <p
        onKeyPress={handleKeyPress}
        onDoubleClick={(e) => (
          e.target.contentEditable=true,
          e.target.className='inEdit'
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