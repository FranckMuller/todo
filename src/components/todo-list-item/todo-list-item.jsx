import React, { Component } from 'react';

import './todo-list-item.css'

class TodoListItem extends Component {

  state = {
    done: false,
    important: this.props.important
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  };

  render() {
    const { done, important } = this.state;
    const { label, onDeleted } = this.props;
    let classNames = 'label';
    if(done) classNames += ' done';
    if(important) classNames += ' important';

    return (
      <span className="d-flex align-items-center todo-list-item justify-content-between">
        <span 
          className={classNames}
          onClick={this.onLabelClick}
          >
          { label }
        </span>
        <span>
          <button 
            onClick={this.onMarkImportant} 
            className={"btn btn-outline-success" + (important ? ' active' : '')}>
            <i className="fa fa-exclamation"></i>
          </button>

          <button       
            className="btn btn-outline-info">
            <i className="fa fa-pencil"></i>
          </button>

          <button
            onClick={onDeleted}         
            className="btn btn-outline-danger">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </span>
    );
  };
};

export default TodoListItem;
