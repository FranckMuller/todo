import React from 'react';

import './status-filter-panel.css';

const StatusFilterPanel = ({ filterItems, filterValue }) => {
  return (
    <div className="status-filter-panel btn-group">
      <button 
        className={"btn btn-primary" + (filterValue !== 'done' && filterValue !== 'important' ? ' active' : '')}
        onClick={() => filterItems('')} >All</button>
      <button
        className={"btn btn-primary" + (filterValue === 'done' ? ' active' : '')}
        onClick={() => filterItems('done')} >Done</button>
      <button 
        className={"btn btn-primary" + (filterValue === 'done' ? ' important' : '')}
        onClick={() => filterItems('important')} >Important</button>
    </div>
  );
};

export default StatusFilterPanel;
