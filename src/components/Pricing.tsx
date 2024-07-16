import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const plans = [
  {
    title: 'Experience Growth with No Risk',
    description: 'Try our full services at no cost for the first month as part of our case study program.',
    price: 'First Month Free',
  },
  {
    title: 'Full Service',
    description: 'Pricing adjusts based on your SKU count, product category, and revenue.',
    price: 'Starting at $2000/month + 1-3% of Monthly Revenue',
  },
  {
    title: 'Customized Solutions',
    description: 'Contact us today to discuss customized pricing based on your specific needs.',
    price: 'Interested in individual services?',
  },
];

const PricingCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ECE4FF',
  color: theme.palette.getContrastText('#ECE4FF'),
  padding: theme.spacing(2),
  borderRadius: '16px',
  textAlign: 'center',
  height: '100%',
}));

const Pricing: React.FC = () => {
  return (
    <Box textAlign="center" my={5}>
      <Typography variant="h4" sx={{ color: "#470EEA", fontWeight: 'bold' }} gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.title}>
            <PricingCard>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  {plan.description}
                </Typography>
                <Typography variant="h6" component="div">
                  {plan.price}
                </Typography>
              </CardContent>
            </PricingCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
