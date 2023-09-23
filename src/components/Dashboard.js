import React, {useState, useRef, useEffect} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import ManageCollections from './ManageCollections';
import ViewEmails from './ViewEmails';
import {useAuth} from './Context';

function Dashboard(){
  const [showViewEmails, setShowViewEmails] = useState(false);
  const [showManageCollections, setShowManageCollections] = useState(false);
  const dashRef = useRef(null); // Create a ref for the username input
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // Focus on the username input when the component mounts
    if(isLoggedIn){
      dashRef.current.focus();
    }

    console.log(isLoggedIn)
    
  }, []);


  const navigate = useNavigate();
 

  const goToManageCollections = () => {
    setShowViewEmails(false);
    setShowManageCollections(true);
  };

  const goToViewEmails = () => {
    setShowManageCollections(false);
    setShowViewEmails(true);
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>
  }

    return (
      
      
        <div className="dashboard-container">
        <div className="dashboard">
          <h1>Welcome to Your Dashboard</h1>
          <p>Here you can manage your NFT collections and email lists.</p>
          <div className="dashboard-actions">
            <button ref={dashRef} onClick={goToManageCollections} className="dashboard-button manage">Manage Collections</button>
            <button onClick={goToViewEmails} className="dashboard-button emails">View Emails</button>
          </div>
        </div>

        {showViewEmails && <ViewEmails onClose={() => setShowViewEmails(false)}/>}
        {showManageCollections && <ManageCollections onClose={() => setShowManageCollections(false)} />}
      </div> 
    
    );
}

export default Dashboard;