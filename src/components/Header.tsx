import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ borderRadius: '0 0 20px 20px', bgcolor: '#EFEFEF' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#470EEA'}}>
          EcomDazzle
        </Typography>
        <ScrollLink to="ourSolution" smooth={true} offset={-64}>
          <Button sx={{color: "black"}}>Solution</Button>
        </ScrollLink>
        <ScrollLink to="whyChooseUs" smooth={true} offset={-64}>
          <Button sx={{color: "black"}}>Why Us?</Button>
        </ScrollLink>
        <ScrollLink to="services" smooth={true} offset={-64}>
          <Button sx={{color: "black"}}>Services</Button>
        </ScrollLink>
        <ScrollLink to="pricing" smooth={true} offset={-64}>
          <Button sx={{color: "black"}}>Pricing</Button>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} offset={-64}>
          <Button sx={{color: "black"}}>Contact</Button>
        </ScrollLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
