import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner-container">
      <div
        className="spinner-border text-secondary"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;