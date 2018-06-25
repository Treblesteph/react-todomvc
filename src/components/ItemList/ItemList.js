import React, { Component } from 'react'

import './ItemList.scss'

class ItemList extends Component {
  render () {
    return (
      <form>
        <div>
          <input type="checkbox" id="item1" key="item1" name="todoitem"
                 value="item1" checked />
          <label for="item1">Item 1</label>
        </div>
        <div>
            <input type="checkbox" id="item2" key="item2" name="todoitem"
                  value="item2" />
            <label for="item2">Item 2</label>
        </div>
        <div>
            <input type="checkbox" id="item3" key="item3" name="todoitem"
                  value="item3" />
            <label for="item3">Item 3</label>
        </div>
      </form>
    )
  }
}

export default ItemList