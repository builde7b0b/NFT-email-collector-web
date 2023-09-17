import React, {useState} from 'react';
import './ViewEmails.css';
import { collectEmail } from '../services/api';


function ViewEmails({onClose}) {

    const [email,  setEmail] = useState(' ');
    const [emailList, setEmailList] = useState([]);

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
      <ul>
        {emailList.map((email, index) => (
            <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
    </div>

    <div className="modal-footer">

    </div>
    </div>
    
    </>
  );
}

export default ViewEmails;
