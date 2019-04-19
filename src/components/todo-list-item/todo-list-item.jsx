import React, { Component } from 'react';

import ItemEditForm from '../item-edit-form';

import './todo-list-item.css'

class TodoListItem extends Component {

  state = {
    showEditForm: false
  }

  toggleItemEditForm = () => {
    this.setState(({ showEditForm }) => {
      return {
        showEditForm: !showEditForm
      }
    });
  };

  render() {
    const { label, done, important,
            deleteItem, toggleDone,
            toggleImportant, ...editItemProps } = this.props;
    const { showEditForm } = this.state;

    let classNames = 'label';
    if(done) classNames += ' done';
    if(important) classNames += ' important';

    const itemEditFrom = (showEditForm) 
                          ? <ItemEditForm {...editItemProps} /> 
                          : null;

    return (
      <span className="d-flex flex-wrap align-items-center todo-list-item justify-content-between">
        <span 
          className={classNames}
          onClick={toggleDone}
          >
          { label }
        </span>
        <span>
          <button 
            onClick={toggleImportant} 
            className={"btn " + (important ? ' active' : '')}>
            <i className="fa fa-exclamation"></i>
          </button>

          <button
            onClick={this.toggleItemEditForm}       
            className={"btn " + (showEditForm ? ' active' : '')}>
            <i className="fa fa-pencil"></i>
          </button>

          <button
            onClick={deleteItem}         
            className="btn">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
        {itemEditFrom}
      </span>
    );
  };
};

export default TodoListItem;
