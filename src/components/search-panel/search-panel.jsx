import React, { Component } from 'react';

import './search-bar.css';

class SearchPanel extends Component {

  state = {
    inputValue: ''
  };

  onChangeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
    this.props.onSearchItems(e.target.value);
  }; 

  render() {
    return (
      <div className="search-panel flex-grow-1">
        <input
          onChange={this.onChangeInputValue}
          placeholder="search" 
          className="form-control" 
          type="text"
          value={this.state.inputValue} />
      </div>
    );
  };
};

export default SearchPanel;
