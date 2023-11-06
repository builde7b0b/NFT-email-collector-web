import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



function FeatureList() {
    const features = [
      "Unlimited Access to All Features",
      "24/7 Priority Support",
      "Custom Integration Options",
      "Advanced Analytics Dashboard",
      // Add more features as needed
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h5" component="div" style={{ marginBottom: '10px' }}>
            Premium Subscription
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="div">
            Get unlimited access to all our advanced features!
          </Typography>
          <List>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }

    export default FeatureList;