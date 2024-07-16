import React from 'react';
import { Box, Typography, Button, Grid, Checkbox, FormControlLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MainSection: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 2, color: 'blueviolet', fontWeight: 'bold' }}>
        Grow your Amazon Business while Enjoying Life
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Let our Full Service Amazon Agency save your time and money by managing your business and boosting your sales,
        so you can focus on what you love.
      </Typography>
      <Button variant="contained" color="warning" sx={{ mb: 4 }}>
        Get a Free Consultation Now
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon />} defaultChecked />}
            label="Maximize Conversions"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon />} defaultChecked />}
            label="Drive Traffic"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon />} defaultChecked />}
            label="Boost Visibility"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainSection;
