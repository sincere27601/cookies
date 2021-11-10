import React from 'react';
import ".//Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
    return (
        <div className="main-footer">
        <div className="container">
        <div className="row">
        <br />
         

               <div className="header-photos">
               <img className="picture1" alt="pic" src="https://www.notary2notary.com/wp-content/uploads/2021/10/nna-services-nna-logo.jpg"></img>
               <img className="picture1" alt="pic" src="https://notarypublicunderwriters.com/images/virtuemart/product/100k-notary-insurance.jpg"></img>
               <img className="picture1" alt="pic" src="https://1000logos.net/wp-content/uploads/2018/03/Yelp-Logo-2004.png"></img>
               <img className="picture1" alt="pic" src="https://www.notary2notary.com/wp-content/uploads/2021/09/Copy-of-Logos.png"></img>
              
               
               
               <div className="footer-hours">
               <p>Hours of Operation</p> 
               <h4>9am-3pm</h4>
               <div className="icons">
               <EmailIcon /> | <InstagramIcon /> | <LocalPhoneIcon /> | 
               </div>
               </div>
               
               </div>
         
        </div>
        </div>
        </div>
    );
}

export default Footer;

