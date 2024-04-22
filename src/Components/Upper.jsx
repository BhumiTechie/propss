import React from 'react';

const Upper = ({ children }) => {
  return (
    <div style={{ textTransform: 'uppercase' }}>
      {children}
    </div>
  );
};

export default Upper;
