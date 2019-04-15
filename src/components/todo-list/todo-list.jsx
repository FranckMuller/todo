import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css'

const TodoList = ({ todoData, onDeleted }) => {
  const items = todoData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          onDeleted={() => onDeleted(id)}
          {...itemProps} 
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
