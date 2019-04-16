import React, { Component } from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    valueInput: ''
  };

  changeValueInput = (e) => {
    this.setState({
      valueInput: e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.valueInput);
    this.setState({
      valueInput: ''
    });
  };  
  
  render() {
    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.submitForm} >
        <div className="item-add-input flex-grow-1">
          <input 
            className="form-control" 
            type="text"
            placeholder="what needs to be done?"
            onChange={this.changeValueInput}
            value={this.state.valueInput} />
        </div>
        <button className="btn btn-primary">Add Item</button>
      </form>
    );
  }
}

export default ItemAddForm;
