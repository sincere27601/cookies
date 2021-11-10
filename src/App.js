import React from 'react';
import Footer from './Components/Footer';
import './App.css';
import Main from "./Components/Main";



function App() {
  return (
    <div className="container1">
    <div className="header-name">
    <h1 className="name"> A. R. Signing Services</h1>
    </div>
    <div className="header-photos">
    </div>
     
      <div className="content-wrap-center">
      <Main />
      </div>
     
    
    <div className="page-container">
    <div className="content-wrap">
    </div>
    <Footer />
    </div>
    </div>

      
      
     

      
  );
}

export default App;
