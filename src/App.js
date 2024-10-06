import Navbar from './nav';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import ContactForm from './ContactForm';
import Footer from './footer';
import React from 'react';
import './App.css'

function App() {
  return (
    <div id="home">
      <Navbar/>
      <div className="shadow">
      <div><Section1/></div>
      <div id="about"><Section2/></div>
      <div id="skills"><Section3/></div>
      <div id="contact"><ContactForm/></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
