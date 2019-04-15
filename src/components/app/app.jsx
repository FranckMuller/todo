import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AddItemPanel from '../add-item-panel';
import StatusFilterPanel from '../status-filter-panel';

import { DoubleRow } from '../hoc-helpers';

import './app.css';

class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Cofee', important: false, id: 'df'},
      {label: 'Learn React', important: true, id: 'lr'},
      {label: 'Build Awesome App', important: false, id: 'baa'}
    ]
  };

  onDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => id === el.id );
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      
      return {
        todoData: newArray
      }
    });
  };

  onAddItem = (value) => {
    this.setState(({ todoData }) => {
      const item = {
        label: value,
        important: false,
        id: 'rt'
      }

      const newArray = [...todoData, item];

      return {
        todoData: newArray
      }
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <DoubleRow 
          left={<SearchPanel />} 
          right={<StatusFilterPanel />}
        />
        <TodoList 
          onDeleted={this.onDeleteItem}
          {...this.state}
        />
        <AddItemPanel onAddItem={this.onAddItem} />
      </div>
    );
  };
};

export default App;
