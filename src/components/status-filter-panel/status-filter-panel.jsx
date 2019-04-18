import React from 'react';

import './status-filter-panel.css';

const StatusFilterPanel = ({ onFilterItems, filterValue }) => {
  return (
    <div className="status-filter-panel btn-group">
      <button 
        className={"btn btn-primary" + (filterValue !== 'done' && filterValue !== 'important' ? ' active' : '')}
        onClick={() => onFilterItems('')} >All</button>
      <button
        className={"btn btn-primary" + (filterValue === 'done' ? ' active' : '')}
        onClick={() => onFilterItems('done')} >Done</button>
      <button 
        className={"btn btn-primary" + (filterValue === 'important' ? ' active' : '')}
        onClick={() => onFilterItems('important')} >Important</button>
    </div>
  );
};

export default StatusFilterPanel;
