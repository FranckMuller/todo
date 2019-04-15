import React from 'react';

import './double-row.css'

const DoubleRow = ({ left, right }) => {
  return (
    <div className="double-row d-flex align-items-center">
      {left}
      {right}
    </div>
  );
};

export default DoubleRow;
