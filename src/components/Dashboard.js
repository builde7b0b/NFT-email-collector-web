import React, {useState} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import ManageCollections from './ManageCollections';
import ViewEmails from './ViewEmails';


function Dashboard(){
  const [showViewEmails, setShowViewEmails] = useState(false);
  const [showManageCollections, setShowManageCollections] = useState(false);


  const navigate = useNavigate();

  const goToManageCollections = () => {
    setShowViewEmails(false);
    setShowManageCollections(true);
  };

  const goToViewEmails = () => {
    setShowManageCollections(false);
    setShowViewEmails(true);
  };


    return (
        <div className="dashboard-container">
        <div className="dashboard">
          <h1>Welcome to Your Dashboard</h1>
          <p>Here you can manage your NFT collections and email lists.</p>
          <div className="dashboard-actions">
            <button onClick={goToManageCollections} className="dashboard-button manage">Manage Collections</button>
            <button onClick={goToViewEmails} className="dashboard-button emails">View Emails</button>
          </div>
        </div>

        {showViewEmails && <ViewEmails onClose={() => setShowViewEmails(false)}/>}
        {showManageCollections && <ManageCollections onClose={() => setShowManageCollections(false)} />}
      </div>
    );
}

export default Dashboard;