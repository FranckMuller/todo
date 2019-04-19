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
      this.createTodoItem('Build Awesome App'),
      this.createTodoItem('Have a Lunch'),
      this.createTodoItem('Become a Guru React JS')
    ],
    term: '',
    filterMarker: 'all'
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

  searchItems = (items, value) => {
    if(value.length === 0) return items;
    return items = items.filter((el) => {
      return el.label.toLowerCase().includes(value.toLowerCase());
    });
  };

  onSearchItems = (term) => {
    this.setState({
      term
    });
  };

  onFilterItems = (filterMarker) => {
    this.setState({
      filterMarker
    });
  };

  filterItems(items, filterMarker) {
    if(filterMarker === 'all') return items;
    if(filterMarker === 'active') {
      return items.filter((el) => {
        return !el.done
      })
    }
    return items.filter((el) => {
      return el[filterMarker]
    });
  };

  render() {
    const { todoData, term, filterMarker } = this.state;
    const { toggleImportant, deleteItem, toggleDone, editItem, addItem, onSearchItems, onFilterItems } = this;

    const doneCount = todoData.filter(({ done }) => done === true ).length;

    const importantCount = todoData.filter(({ important }) => important === true ).length;
    
    const todoCount = todoData.length - doneCount;

    let visibleItems = this.searchItems(todoData, term);
    visibleItems = this.filterItems(visibleItems, filterMarker);
    

    return (
      <div className="app">
        <AppHeader 
          todoCount={todoCount} 
          doneCount={doneCount}
          importantCount={importantCount} />
        <DoubleRow 
          left={<SearchPanel onSearchItems={onSearchItems} />} 
          right={<StatusFilterPanel onFilterItems={onFilterItems} filterMarker={filterMarker} />}
        />
        <TodoList 
          toggleImportant={toggleImportant}
          deleteItem={deleteItem}
          toggleDone={toggleDone}
          editItem={editItem}
          todoData={visibleItems}
        />
        <ItemAddForm addItem={addItem} />
      </div>
    );
  };
};

export default App;
