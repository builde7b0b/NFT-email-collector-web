import React from 'react';
import './ManageCollections.css';

function ManageCollections( {onClose}) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Manage Collections</h2>
        </div>
        {/* Your collection management logic here */}
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ManageCollections;
