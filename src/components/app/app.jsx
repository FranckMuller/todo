import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import StatusFilterPanel from '../status-filter-panel';

import { DoubleRow } from '../hoc-helpers';

import './app.css';

class App extends Component {

  maxId = 100;

  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  state = {
    todoData: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Build Awesome App')
    ],
    filterValue: ''
  };

  findTodoItemIdx(array, id) {
    return array.findIndex((el) => el.id === id);
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.findTodoItemIdx(todoData, id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      
      return {
        todoData: newArray
      }
    });
  };

  searchItems = (searchValue) => {
    this.setState({
      filterValue: searchValue
    })
  };

  addItem = (label) => {
    const newItem = this.createTodoItem(label);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = this.findTodoItemIdx(arr, id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  editItem = (id, label) => {
    this.setState(({ todoData }) => {
      const idx = this.findTodoItemIdx(todoData, id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, label: label };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
    });
  };

  onFilterItems = (markerFilter) => {
    this.setState({
      filterValue: markerFilter
    });
  }

  render() {
    const { todoData, filterValue } = this.state;
    const { toggleImportant, deleteItem, toggleDone, editItem, addItem, searchItems, onFilterItems } = this;

    const doneCount = todoData.filter(({ done }) => done === true ).length;
    const importantCount = todoData.filter(({ important }) => important === true ).length;
    const todoCount = todoData.length - doneCount;

    const data = 
      todoData.filter((el) => el.label.toLowerCase().indexOf(filterValue) !== -1
                      || el[filterValue] === true);

    return (
      <div className="app">
        <AppHeader 
          todoCount={todoCount} 
          doneCount={doneCount}
          importantCount={importantCount} />
        <DoubleRow 
          left={<SearchPanel searchItems={searchItems} />} 
          right={<StatusFilterPanel onFilterItems={onFilterItems} filterValue={filterValue} />}
        />
        <TodoList 
          toggleImportant={toggleImportant}
          deleteItem={deleteItem}
          toggleDone={toggleDone}
          editItem={editItem}
          todoData={data}
        />
        <ItemAddForm addItem={addItem} />
      </div>
    );
  };
};

export default App;
