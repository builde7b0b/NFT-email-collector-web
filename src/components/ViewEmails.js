import React, {useState, useEffect} from 'react';
import './ViewEmails.css';
import { collectEmail } from '../services/api';
import { getAllEmails } from '../services/api';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function ViewEmails({onClose}) {

    const [email,  setEmail] = useState(' ');
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
      async function fetchEmails() {
        try {
          const response = await getAllEmails();
          setEmailList(response.data);
        } catch (error) {
          console.error('Failed to fetch emails:', error)
        }
      }
      fetchEmails();
    }, []);

    const handleCollectEmail = async () => {
        const userId = 'some_user_id';
        try {
            const response = await collectEmail({ email, user_id: userId});
            if(response.status === 200){
                setEmailList([...emailList, email]);
                setEmail(''); // clear input
            }
        } catch(error){
            console.error('Failed to collect email:', error);
        }
    };


  return (
<>
<div className="modal-container">
<div className="modal-content">
<div className="modal-header">

<h2>View Emails</h2>
<button className="modal-button" onClick={onClose}>Close</button>
</div>


    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter email to collect"/>
    <button className="modal-button" onClick={handleCollectEmail}>Collect Email</button>


    <div className="view-emails">
      <h1>View Collected Emails</h1>
      {/* Add your email viewing UI here */}
      {/* Using ag-grid to display emails */}
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
              columnDefs={[
                { headerName: "Email", field: "email", sortable: true, filter: true },
                // { headerName: "User ID", field: "user_id", sortable: true, filter: true }
              ]}
              rowData={emailList}
            />
          </div>
      {/* <ul>
    {emailList.map((emailObj, index) => (
        <li key={index}>{emailObj.email}</li>
    ))}
</ul> */}

    </div>
    </div>

    <div className="modal-footer">

    </div>
    </div>
    
    </>
  );
}

export default ViewEmails;
