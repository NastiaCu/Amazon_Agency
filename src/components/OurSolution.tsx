import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const OurSolution: React.FC = () => {
  return (
    <Box sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'blueviolet', textAlign: 'center', fontWeight: 'bold' }}>
        Our Solution
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: '#ffe4e1', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: 'deeppink', fontWeight: 'bold' }}>
                Struggling to Increase Sales and Feeling Overwhelmed?
              </Typography>
              <Typography variant="body1">
                <strong>Boosting sales on Amazon amidst fierce competition can be exhausting.</strong> Managing your
                catalog, optimizing listings, and running ad campaigns often leave no time for growth or relaxation.
                The stress of missed opportunities and constant pressure take a toll on your peace of mind and make your
                goal of a thriving Amazon business seem unattainable.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={1} sx={{ textAlign: 'center' }}>
          <ArrowRightAltIcon sx={{ fontSize: 50, color: 'blueviolet' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: '#f3e5f5', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: 'blueviolet', fontWeight: 'bold' }}>
                Let Us Lift the Burden!
              </Typography>
              <Typography variant="body1">
                <strong>Imagine if you could hand off those burdens.</strong> “Agency Name” steps in to seamlessly manage
                your operations. We not only boost your sales but also free you to focus on what truly matters - whether
                it means scaling further or spending time on personal interests. <br />
                <strong>Experience the joy of watching your business thrive while you regain your passion and peace of mind.</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurSolution;
