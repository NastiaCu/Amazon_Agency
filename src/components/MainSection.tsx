import React from 'react';
import { Box, Typography, Button, Grid, Checkbox, FormControlLabel } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import homePhoto from '../assets/HomePhoto.png';

const MainSection: React.FC = () => {
  return (
    <Box sx={{ pt: 10, pb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, color: '#470EEA', fontWeight: 'bold' }}>
            Grow your Amazon Business while Enjoying Life
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>
            Let our Full Service Amazon Agency save your time and money by managing your business and boosting your sales,
            so you can focus on what you love.
          </Typography>
          <Button variant="contained" color="warning" sx={{ mb: 4, borderRadius: '10px' }}>
            Get a Free Consultation Now
          </Button>
          <Grid container direction="column">
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox icon={<CheckBoxOutlinedIcon />} checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#470EEA' }}/>} defaultChecked />}
                label="Maximize Conversions"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox icon={<CheckBoxOutlinedIcon />} checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#470EEA' }}/>} defaultChecked />}
                label="Drive Traffic"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox icon={<CheckBoxOutlinedIcon />} checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#470EEA' }}/>} defaultChecked />}
                label="Boost Visibility"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} marginTop="auto">
          <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <img src={homePhoto} alt="Description" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainSection;
