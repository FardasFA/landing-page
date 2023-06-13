import React from 'react';
import './App.css';
import './style.css';
import './global.css';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';

function App() {
  

  return (
    <body className='body'>
        <Home/>
        <Services/>
        <Contact/>
        <Footer/>
    </body>
  );
}

export default App;
