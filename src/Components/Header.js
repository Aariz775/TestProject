import react from 'react';
import '../Style/Header.css'

function Header() {
  return (
    <div className="container">
       <div style={{display:'-webkit-inline-flex',justifyContent: 'revert',gap:'80px',margin: '0px 15px'}}>
       <p>Home</p>
       <p>Contact Us</p>
       <p>Registration</p>
       <p>EMail</p>
       <p>About</p>
       <p>Contact</p>
       </div>
    </div>
  );
}

export default Header;
