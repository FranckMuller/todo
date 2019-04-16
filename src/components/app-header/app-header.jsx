import React from 'react';

import './app-header.css'

const AppHeader = ({ todoCount, doneCount, importantCount }) => {
  return (
    <div className="app-header d-flex justify-content-between align-items-center">
      <h1>My Todo App</h1>
      <div className="indicator-items">
        {todoCount} more to do, {doneCount} done, {importantCount} important
      </div>
    </div>
  );
};

export default AppHeader;
