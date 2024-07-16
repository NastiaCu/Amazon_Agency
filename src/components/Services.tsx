import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const services = [
  { title: 'PPC', color: '#8E7BFF', icon: '📈' },
  { title: 'SEO', color: '#F08D7B', icon: '🧠' },
  { title: 'Design', color: '#FFA742', icon: '🎨' },
  { title: 'Copywriting', color: '#8BC34A', icon: '✏️' },
  { title: 'Listing Optimization', color: '#29B6F6', icon: '🔄' },
  { title: 'Pricing Optimization', color: '#F06292', icon: '💲' },
  { title: 'Product Launches', color: '#BA68C8', icon: '🚀' },
  { title: 'Reporting', color: '#757575', icon: '📄' },
];

const ServiceCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

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
    height: 100,
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
      <Typography variant="h4" color="primary" gutterBottom>
        Full Service Amazon Agency
      </Typography>
      <Typography variant="h6" gutterBottom>
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
