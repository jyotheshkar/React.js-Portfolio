import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const App = () => {
  return (
    <div className='bg-#[252525]'>
   <Navbar />
   < Home />
   < About />
   < Skills />
   < Work />
   < Contact />
    </div>
  )
}

export default App