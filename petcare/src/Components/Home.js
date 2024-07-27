import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';

import './Styles/Home.css';
import { Link } from "react-router-dom";

// Corrected image paths
import rescueImage from './Images/Animal-Rescue.jpg';
import medicalImage from './Images/dog-with-medical-case.jpg';
import adoptionImage from './Images/adoptdog.jpg';
import feedingImage from './Images/image1.jpg';
import trainingImage from './Images/training.jpg';

function Home() {
  return (
    <div className="home">
   
      <div className="home-content">
        <section className="hero">
          <Typography variant="h2" align="center" gutterBottom>
            Help Street Dogs in Need
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Report an incident to get immediate assistance for injured street dogs.
          </Typography>
          <Link to="/report">
            <Button variant="contained" color="primary">
              Report an Incident
            </Button>
          </Link>
        </section>

        <section className="services">
          <Typography variant="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="service-card">
                <img src={rescueImage} alt="Rescue Operations" className="service-image"/>
                <Typography variant="h5">Rescue Operations</Typography>
                <Typography variant="body2">
                  Quick and efficient rescue operations for injured street dogs.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="service-card">
                <img src={medicalImage} alt="Medical Treatment" className="service-image"/>
                <Typography variant="h5">Medical Treatment</Typography>
                <Typography variant="body2">
                  Immediate medical treatment and care for rescued dogs.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="service-card">
                <img src={adoptionImage} alt="Adoption Assistance" className="service-image"/>
                <Typography variant="h5">Adoption Assistance</Typography>
                <Typography variant="body2">
                  Helping rescued dogs find loving homes.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </section>

        <section className="feeding">
          <Typography variant="h2" align="center" gutterBottom>
            How to Feed Your Pet
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={feedingImage} alt="Feeding Your Pet" className="info-image"/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                Feeding your pet properly is crucial for their health. Make sure to choose high-quality pet food, adhere to feeding guidelines, and provide fresh water daily. Avoid feeding them human food or anything that could be harmful to their health.
              </Typography>
            </Grid>
          </Grid>
        </section>

        <section className="training">
          <Typography variant="h2" align="center" gutterBottom>
            Training Your Pet
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={trainingImage} alt="Training Your Pet" className="info-image"/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                Training your pet helps build a strong bond and ensures good behavior. Start with basic commands like sit, stay, and come. Use positive reinforcement techniques, be patient, and keep training sessions short and fun.
              </Typography>
            </Grid>
          </Grid>
        </section>
      </div>
      
    </div>
  );
}

export default Home;
