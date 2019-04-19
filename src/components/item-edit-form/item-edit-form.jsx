import React, { Component } from 'react';

import './item-edit-form.css';

class ItemEditForm extends Component {

  state = {
    inputValue: ''
  };

  onChangeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }; 

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.editItem(this.props.id, this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form 
        className="item-edit-form d-flex"
        onSubmit={this.onSubmitForm} >
        <div className="item-edit-input flex-grow-1">
          <input 
            className="form-control" 
            type="text"
            placeholder="edit todo"
            value={inputValue}
            onChange={this.onChangeInputValue} />
        </div>
        <button className="btn">Edit Item</button>
      </form>
    );
  };
};

export default ItemEditForm;
