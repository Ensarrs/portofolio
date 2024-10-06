import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
  return (
    <div className="footeri">
    <div className="container2">
      <footer className="footer">
        <ul>
        <li className="nav-link"><a href="#home">Home</a></li>
          <li className="nav-link"><a href="#about">About</a></li>
          <li className="nav-link"><a href="#skills">Skills</a></li>
          <li className="nav-link"><a href="#contact">Contact</a></li>
        </ul>
        </footer>
        </div>
        <div className="line"></div>
        <div className="footeri2">
            <p>Made with ❤️ by <strong>Ensar Maliqi</strong> 
          <br></br>&copy;All right reserved. 2024</p>
      </div>
      </div>
  );
};

export default Footer;
