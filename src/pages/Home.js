import React from 'react';
import OurWorks from '../components/OurWorks';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main';

function App() {
  return (
    <>
      <Main sx={{ pt: { xs: 15, sm: 25 }, mb: { xs: 8, sm: 15, md: 20 } }} />
      <AboutUs sx={{ mb: { xs: 10, sm: 15, md: 20 } }} />
      <OurWorks sx={{ mb: { xs: 15, md: 25 } }} />
    </>
  );
}

export default App;
