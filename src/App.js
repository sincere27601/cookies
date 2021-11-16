import React from 'react';
import Footer from './Components/Footer';
import './App.css';
import Main from "./Components/Main";
import RightCenter from './Components/RightCenter';
import CenterCenter from './Components/CenterCenter';
function App() {

  
  return (
  <div>
    <div className="header-photos">
    <h1 className="name1"> A. R. Signing Services</h1>
              
               <img className="picture1" alt="pic" src="https://www.notary2notary.com/wp-content/uploads/2021/10/nna-services-nna-logo.jpg"></img>
               <img className="picture1" alt="pic" src="https://notarypublicunderwriters.com/images/virtuemart/product/100k-notary-insurance.jpg"></img>
               </div>
               
    
    
    <div className="maincenter">
    
    </div>
    <div className="header-photos">
    </div>
    
      <div className="content-wrap-center">
      <Main />
      </div>
     
    <div className="centermiddle">
    <CenterCenter />
    </div>
    <div className="page-container">
    <div className="content-wrap">
    </div>
    <Footer />
    </div>
    <RightCenter />
    </div>
    
    
     
  )
      
  
};

export default App;
