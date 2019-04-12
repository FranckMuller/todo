import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import TodoListItem from './components/todo-list-item';
import StatusFilterPanel from './components/status-filter-panel';
import AddItemPanel from './components/add-item-panel';

class App extends Component {

  state = {
    todosData: [
      {label: 'Drink Cofee', important: false, id: 'df'},
      {label: 'Learn React', important: true, id: 'lr'},
      {label: 'Build Awesome App', important: false, id: 'baa'}
    ]
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <TodoList {...this.state} />
        <TodoListItem />
        <StatusFilterPanel />
        <AddItemPanel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
