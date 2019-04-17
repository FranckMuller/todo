import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css'

const TodoList = ({ todoData, deleteItem, toggleDone, toggleImportant, editItem }) => {
  const items = todoData.map((item) => {

    return (
      <li className="list-group-item" key={item.id}>
        <TodoListItem
          toggleDone={() => toggleDone(item.id)}
          deleteItem={() => deleteItem(item.id)}
          toggleImportant={() => toggleImportant(item.id)}
          editItem={editItem}
          {...item} 
        />
      </li>
    );
  });
  return (
    <ul className="todo-list list-group list-unstyled">
      {items}
    </ul>
  );
};

export default TodoList;
