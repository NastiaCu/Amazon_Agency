import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';

const WhyChooseUs: React.FC = () => {
  return (
    <Box sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', color: '#470EEA' }}>
        Why Choose Our Dynamic New Agency <span style={{ color: 'deeppink' }}>Amid Many Established Competitors?</span>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: '#ffcccb', borderRadius: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SchoolIcon sx={{ fontSize: 60, color: 'white' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="body1">
            It’s a fair question and one we welcome. We understand your hesitation. <strong>Trust is built, not given.</strong> Our team is committed to earning yours through transparency, exceptional service, and consistent results.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ bgcolor: '#d4a5f7', borderRadius: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <WalletIcon sx={{ fontSize: 60, color: 'white' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="body1">
            Join us as a showcase client at a special introductory rate and let your success be the highlight of our portfolio, demonstrating the results we achieve together. We align our reputation with your success. To completely eliminate your risk, we offer a 1-month free trial, no strings attached. Experience our skills and strategies tailored to your specific needs firsthand. If you're delighted with the results and choose to proceed, we'll be excited to continue supporting your growth journey.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
