import React from 'react';
import Footer from './Components/Footer';
import './App.css';



function App() {
  return (
    <div className="App-header">
    <p>
    <ul>
    <li>Trained & Certified</li>
    <li>Mobile Notary</li>
    <li>Loan Signing Agent</li>
    <li>E-Notary</li>
    </ul>
    </p>
      <h1 className="name"> A. R. Signing Services</h1>
      <img className="picture1" alt="pic" src="https://www.nationalnotary.org/Image%20Library/NNA/OpenGraph.jpg"></img>
      <img className="picture1" alt="pic" src="https://notarypublicunderwriters.com/images/virtuemart/product/100k-notary-insurance.jpg"></img>
      <br/>
     
    
    <div className="page-container">
    <div className="content-wrap">
    </div>
    <Footer />
    </div>
    </div>

      
      
     

      
  );
}

export default App;
