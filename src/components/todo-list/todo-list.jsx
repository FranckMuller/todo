import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todosData }) => {
  const items = todosData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return (
    <ul className="todo-list">
      {items}
    </ul>
  );
};

export default TodoList;
