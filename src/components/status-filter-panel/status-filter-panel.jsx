import React from 'react';

import './status-filter-panel.css';

const StatusFilterPanel = () => {
  return (
    <div className="status-filter-panel btn-group">
      <button className="btn btn-primary active">All</button>
      <button className="btn btn-primary">Done</button>
      <button className="btn btn-primary">Active</button>
    </div>
  );
};

export default StatusFilterPanel;
