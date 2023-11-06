import React, {useState, useEffect} from 'react';
import './ViewEmails.css';
import { getEmailsByUser, getAllEmails, collectEmail, getEmailsByCollection, getCurrentUserId } from '../services/api';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function ViewEmails({onClose}) {

    const [email,  setEmail] = useState(' ');
    const [emailList, setEmailList] = useState([]);
    const [collections, setCollections] = useState([]); // Assuming you have a method to fetch collections




    // useEffect(() => {
    //   async function fetchEmails() {
    //     try {
    //       // const response = await getAllEmails();
    //       // setEmailList(response.data);
    //       const emailsByCollection = [];
    //       for (const collection of collections) {
    //         const response = await getEmailsByCollection(collection.id);
    //         emailsByCollection.push({
    //           collection: collection.name,
    //           emails: response.data
    //         });
    //       }
    //       setEmailList(emailsByCollection);
    //     } catch (error) {
    //       console.error('Failed to fetch emails:', error)
    //     }
    //   }
    //   fetchEmails();
    // }, [collections]);

    useEffect(() => {
      async function fetchEmails() {
          try {
            const userId = await getCurrentUserId();

              const response = await getEmailsByUser(userId);
              console.log(response);
              console.log(userId);
              setEmailList(response);
              
          } catch (error) {
              console.error('Failed to fetch emails:', error);
          }
      }
      fetchEmails();
  }, []);

  useEffect(() => {
    console.log(emailList);
  }, [emailList]);

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

                {/* Email Collection Input */}
                <div className="email-collection">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email to collect"
                    />
                    <button className="modal-button" onClick={handleCollectEmail}>Collect Email</button>
                </div>

                {/* Email Viewing Section */}
                <div className="view-emails">
                    <h1>View Collected Emails</h1>
                    {emailList.map((collectionData, index) => (
                        <div key={index}>
                            <h3>{collectionData.user_id}</h3>
                            <div className="ag-theme-alpine" style={{ height: 100, width: 400 }}>
                                <AgGridReact
                                    columnDefs={[
                                        { headerName: "Email", field: "email", sortable: true, filter: true }
                                    ]}
                                    rowData={[collectionData]}
                                    domLayout='autoHeight'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default ViewEmails;
