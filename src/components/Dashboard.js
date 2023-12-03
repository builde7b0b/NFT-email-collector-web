import React, {useState, useRef, useEffect} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import ManageCollections from './ManageCollections';
import ViewEmails from './ViewEmails';
import {useAuth} from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import DownloadEmailsButton from '../services/downloadEmails';

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

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if(showManageCollections && !dashRef.current.contains(event.target)){
  //       setShowManageCollections(false);
  //     }
  //     if(showViewEmails && !dashRef.current.contains(event.target)){
  //       setShowViewEmails(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showManageCollections, showViewEmails]);


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
            <button ref={dashRef} onClick={goToManageCollections} className="dashboard-button manage">Manage NFT Collections</button>
            <button onClick={goToViewEmails} className="dashboard-button emails ">View Email List</button>
            <button disabled onClick={goToViewEmails} className="dashboard-button "><FontAwesomeIcon icon={faStar} />Export Email List</button>
            <button disabled onClick={goToViewEmails} className="dashboard-button "><FontAwesomeIcon icon={faStar} />Create Email Campaign</button>
            <button disabled onClick={goToViewEmails} className="dashboard-button"><FontAwesomeIcon icon={faStar} />Priority Support</button>
            <button disabled onClick={goToViewEmails} className="dashboard-button"><FontAwesomeIcon icon={faStar} />Manage NFTs</button>
            <DownloadEmailsButton>
            <FontAwesomeIcon icon={faStar} />
            </DownloadEmailsButton>
             
            
          </div>
        </div>

        {showViewEmails && <ViewEmails onClose={() => setShowViewEmails(false)}/>}
        {showManageCollections && <ManageCollections onClose={() => setShowManageCollections(false)} />}
      </div> 
    
    );
}

export default Dashboard;