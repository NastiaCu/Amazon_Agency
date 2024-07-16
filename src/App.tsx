import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import { Link, Element } from 'react-scroll';
import Header from './components/Header';
import MainSection from './components/MainSection';
import OurSolution from './components/OurSolution';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ mt: '64px' }}> 
        <Container>
          <Element name="mainSection">
            <MainSection />
          </Element>
          <Element name="ourSolution">
            <OurSolution />
          </Element>
          <Element name="whyChooseUs">
            <WhyChooseUs />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <Element name="pricing">
            <Pricing />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
