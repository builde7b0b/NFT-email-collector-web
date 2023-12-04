import React from 'react';

const UpdateSubscriptionButton = ({ updateSubscriptionStatus }) => {
    const handleClick = () => {
        updateSubscriptionStatus()
            .then(response => {
                // Handle the response (e.g., notify the user of the update)
                console.log('Subscription status updated:', response);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error updating subscription status:', error);
            });
    };

    return (
        <button onClick={handleClick}>
            Update Subscription Status
        </button>
    );
};

export default UpdateSubscriptionButton;
