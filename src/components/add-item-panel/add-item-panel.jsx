import React from 'react';

import './add-item-panel.css';

const AddItemPanel = ({ onAddItem }) => {
  return (
    <div className="add-item-panel d-flex">
      <div className="add-item-input flex-grow-1">
        <input className="form-control" type="text"/>
      </div>
      <button
        onClick={() => onAddItem('random text')} 
        className="btn btn-primary">
        Add Item
      </button>
    </div>
  );
};

export default AddItemPanel;