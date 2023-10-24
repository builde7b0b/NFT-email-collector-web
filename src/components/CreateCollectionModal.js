import React, {useState} from 'react';
import { createCollection } from '../services/api';
import { useAuth } from './Context';


function CreateCollectionModal({ onClose, onCollectionCreated }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {userEmail, setUserEmail } = useAuth();
  
    const handleCreate = async () => {
      console.log(name, userEmail, description)
      const data = {
        name,
        description,               
      };
      try {
        const response = await createCollection(data);
        onCollectionCreated(response.data);
        onClose();
      } catch (error) {
        console.error('Failed to create collection:', error);
      }
    };
  
    return (
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Create New Collection</h2>
          </div>
          <div>
            <p>Name:</p>
            <input type="text" placeholder="Collection Name" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Description:</p>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="modal-button" onClick={handleCreate}>Create Collection</button>
          </div>
          <div className="modal-footer">
            <button className="modal-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CreateCollectionModal;