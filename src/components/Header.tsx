import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcomDazzle
        </Typography>
        <ScrollLink to="ourSolution" smooth={true} offset={-64}>
          <Button color="inherit">Solution</Button>
        </ScrollLink>
        <ScrollLink to="whyChooseUs" smooth={true} offset={-64}>
          <Button color="inherit">Why Us?</Button>
        </ScrollLink>
        <ScrollLink to="services" smooth={true} offset={-64}>
          <Button color="inherit">Services</Button>
        </ScrollLink>
        <ScrollLink to="pricing" smooth={true} offset={-64}>
          <Button color="inherit">Pricing</Button>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} offset={-64}>
          <Button color="inherit">Contact</Button>
        </ScrollLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
