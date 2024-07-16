import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ECE4FF',
  color: theme.palette.getContrastText('#ECE4FF'),
  padding: theme.spacing(2),
  borderRadius: '16px',
  textAlign: 'center',
  height: '100%',
}));

const Contact: React.FC = () => {
  return (
    <Box textAlign="center" my={5}>
      <Typography variant="h4" gutterBottom sx={{ color: "#470EEA", fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ContactCard>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                If you want to schedule a consultation right now, press the button below.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
                Get a Quote
              </Button>
              <Typography variant="body2" component="div">
                Schedule a consultation for an appropriate time for you and we will discuss all the details together.
              </Typography>
              <Box mt={4}>
                <Typography variant="body1" component="div" gutterBottom>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Box component="span" mr={1}>
                      <img src="phone-icon.png" alt="Phone" width="24" />
                    </Box>
                    Phone: +373 (06) 939 7559
                  </Box>
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Box component="span" mr={1}>
                      <img src="email-icon.png" alt="Email" width="24" />
                    </Box>
                    Email: serj27769@gmail.com
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </ContactCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactCard>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Join Our Community
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                Fill in the form below and our team will contact you.
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Your name" variant="outlined" margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Your email" variant="outlined" margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Monthly revenue" variant="outlined" margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="ASIN count" variant="outlined" margin="normal" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Service type" variant="outlined" margin="normal" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Link to one of your products or brand store on Amazon"
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="How can we help you?"
                      variant="outlined"
                      margin="normal"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </ContactCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
