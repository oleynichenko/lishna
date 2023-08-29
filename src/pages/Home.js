import React from 'react';
import OurWorks from '../components/OurWorks';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main';

function App() {
  return (
    <>
      <Main sx={{ pt: 25 }} />
      <AboutUs sx={{ mt: 20, mb: 20 }} />
      <OurWorks />
    </>
  );
}

export default App;
