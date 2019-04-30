import React from 'react';
import ListItem from './ListItem'
import './App.css'

class MyList extends React.Component {
  render() {
    let items = this.props.todoItems.map((item, i) =>(
      <ListItem doThis={item} key={"toDo"+i} />
      ))
    return (
      <div>
        <h1>My List</h1>
        <div>
          <ul>
            {items}
          </ul>
        </div>
      </div>
    )
  }
}
export default MyList