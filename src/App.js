import React from 'react';
import NameAndPhoto from './components/NameAndPhoto.js'
import AboutAndServices from './components/AboutAndServices.js'
import Footer from './components/Footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NameAndPhoto />
      <AboutAndServices />
      <Footer />
    </div>
  );
}

export default App;
