import React from 'react';

import './status-filter-panel.css';

const StatusFilterPanel = ({ onFilterItems, filterMarker }) => {
  return (
    <div className="status-filter-panel btn-group">
      <button 
        className={"btn " + (filterMarker === 'all' ? ' active' : '')}
        onClick={() => onFilterItems('all')} >All</button>
      <button 
        className={"btn " + (filterMarker === 'active' ? ' active' : '')}
        onClick={() => onFilterItems('active')} >Active</button>
      <button
        className={"btn " + (filterMarker === 'done' ? ' active' : '')}
        onClick={() => onFilterItems('done')} >Done</button>
      <button 
        className={"btn " + (filterMarker === 'important' ? ' active' : '')}
        onClick={() => onFilterItems('important')} >Important</button>
    </div>
  );
};

export default StatusFilterPanel;
