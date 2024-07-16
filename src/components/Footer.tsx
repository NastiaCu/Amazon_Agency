import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ECE4FF',
  padding: theme.spacing(4, 0),
  textAlign: 'center',
}));

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <PhoneIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body1">
            Phone: +373 (06) 939 7559
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <EmailIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body1">
            Email: serj27769@gmail.com
          </Typography>
        </Box>
      </Container>
    </FooterBox>
  );
};

export default Footer;
