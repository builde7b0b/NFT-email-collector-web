import React from 'react';
import './Dashboard.css';

function Dashboard(){
    return (
        <div className="dashboard-container">
        <div className="dashboard">
          <h1>Welcome to Your Dashboard</h1>
          <p>Here you can manage your NFT collections and email lists.</p>
          <div className="dashboard-actions">
            <button className="dashboard-button manage">Manage Collections</button>
            <button className="dashboard-button emails">View Emails</button>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;