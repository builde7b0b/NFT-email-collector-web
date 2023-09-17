import React, {useState} from 'react';
import './ManageCollections.css';
import { createCollection } from '../services/api';

function ManageCollections( {onClose}) {
    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(' ');

    const handleCreate = async () => {
        const data = {
            name, 
            description,
            owner_id: 'someOwnerId' // replace with actual id
        };
        const response = await createCollection(data);
        console.log('Collection created:', response.data);
    };


  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Manage Collections</h2>
        </div>

        <div>
          <p>Name:</p><input type="text" placeholder="Collection Name" value={name} onChange={(e) => setName(e.target.value)}  />
          <p>Description:</p><input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className="modal-button" onClick={handleCreate}>Create Collection</button>
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
