import React from 'react';
import './App.css';
// import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Analytics from './Components/Analytics';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

// import { useSelector } from 'react-redux';

function App() {



  return (

    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Cards/>
      <FAQ/>
      <Footer/>
      {/* <ToastContainer /> */}
    </div>
    
  );
}

export default App;
