import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const services = [
  { title: 'PPC', color: '#9975FE', icon: '📈' },
  { title: 'SEO', color: '#FF9077', icon: '🧠' },
  { title: 'Design', color: '#FCA744', icon: '🎨' },
  { title: 'Copywriting', color: '#95E15A', icon: '✏️' },
  { title: 'Listing Optimization', color: '#239CD0', icon: '🔄' },
  { title: 'Pricing Optimization', color: '#FA7BA1', icon: '💲' },
  { title: 'Product Launches', color: '#DF60FF', icon: '🚀' },
  { title: 'Reporting', color: '#8D8D88', icon: '📄' },
];

interface ServiceCardProps {
  bgcolor: string;
  children: React.ReactNode;
}

const StyledServiceCard: React.FC<ServiceCardProps> = ({ bgcolor, children }) => (
  <Card sx={{
    backgroundColor: bgcolor,
    color: (theme) => theme.palette.getContrastText(bgcolor),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    borderRadius: "20px",
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 4,
    },
  }}>
    {children}
  </Card>
);

const Services: React.FC = () => {
  return (
    <Box textAlign="center" my={5}>
      <Typography variant="h4" sx={{ color: "#470EEA", fontWeight: 'bold' }} gutterBottom>
        Full Service Amazon Agency
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold'}} gutterBottom>
        Services we provide
      </Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <StyledServiceCard bgcolor={service.color}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.icon}
                </Typography>
                <Typography variant="h6" component="div">
                  {service.title}
                </Typography>
              </CardContent>
            </StyledServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
