import React from 'react';

import './app-header.css'

const AppHeader = () => {
  return (
    <div className="app-header d-flex justify-content-between align-items-center">
      <h1>My Todo App</h1>
      <div className="indicator-items">
        3 more to do, 0 done
      </div>
    </div>
  );
};

export default AppHeader;
