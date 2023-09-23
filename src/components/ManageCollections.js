import React, {useState, useEffect} from 'react';
import './ManageCollections.css';
import { createCollection } from '../services/api';
import { getAllCollections } from '../services/api';
import { deleteCollection } from '../services/api';
import CreateCollectionModal from './CreateCollectionModal';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ActionsCellRenderer = (params) => {
  const handleUpdate = () => {
    // Your update logic here
    console.log("Update", params.data._id);
  };

  const handleDelete = () => {
    // Your delete logic here
    console.log("Delete", params.data._id);
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


function ManageCollections( {onClose}) {
    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(' ');
    const [collections, setCollections] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

    const columnDefs = [
      {headerCheckBoxSelection: true, checkboxSelection: true, width: 50},
      { headerName: "Name", field: "name" },
      { headerName: "ID", field: "_id" },
      {
        headerName: "Actions",
        cellRendererFramework: (params) => (
          
          <>
            <button onClick={() => handleUpdate(params.data._id)}>Update</button>
            <button onClick={() => handleDelete(params.data._id)}>Delete</button>
          </>
        )
      }
    ];

    const onGridReady = (params) => {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
    }

    




    const handleCreate = async () => {
        const data = {
            name, 
            description,
            owner_id: 'someOwnerId' // replace with actual id
        };
        const response = await createCollection(data);
        console.log('Collection created:', response.data);
    };

    const fetchCollections = async () => {
      try {
        const response = await getAllCollections(); // Assume getAllCollections is your API call function
        setCollections(response.data);
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch collections:", error);
      }
    };

    const handleUpdate = async (id) => {
      console.log("ID TO UPDATE: " + id)
      const selectedRows = gridApi.getSelectedRows();
      // Your update logic here
    };
    
    const handleDelete = async (id) => {
      const selectedRows = gridApi.getSelectedRows();
      try {
        let id = selectedRows[0]._id;
        console.log("ID TO DELETE: " + id)
        await deleteCollection(id); // Assume deleteCollection is your API call function
        fetchCollections(); // Refresh the collections list
      } catch (error) {
        console.error("Failed to delete collection:", error);
      }
    };
    

    useEffect(() => {
      fetchCollections();
    }, []);
    

    const handleCollectionCreated = (newCollection) => {
      setCollections([...collections, newCollection]);
    };
    


  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Manage Collections</h2>
        </div>

        
        {/* Your collection management logic here */}
        <button className="modal-button" onClick={() => setShowCreateModal(true)}>Create New Collection</button>

        {/* <div className="collections-list">
        {collections.map((collection) => (
          <div key={collection._id} className="collection-item">
            <span>{collection.name}</span>
            <p>{collection.id}</p>
            <button className="modal-button" onClick={() => handleUpdate(collection._id)}>Update</button>
            <button className="modal-button" onClick={() => handleDelete(collection._id)}>Delete</button>
          </div>
        ))}
      </div> */}
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            rowData={collections}
            columnDefs={columnDefs}
            domLayout='autoHeight'
            onGridReady={onGridReady}
            rowSelection='single'
          />
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close</button>
          <button className="modal-button" onClick={handleUpdate}>Update Selected</button>
      <button className="modal-button" onClick={handleDelete}>Delete Selected</button>
        </div>
      </div>
      {showCreateModal && <CreateCollectionModal onClose={() => setShowCreateModal(false)} onCollectionCreated={handleCollectionCreated} />}

    </div>
  );
}

export default ManageCollections;
