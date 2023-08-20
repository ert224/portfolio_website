import './Navbar.scss';
import { useState,useEffect } from 'react';
import Elogo from '../../assets/images/e_logo_yellow.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faBitbucket, } from '@fortawesome/free-brands-svg-icons';
import { faHome,faUser,faEnvelope,faSuitcase,faClose,faBars,} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { SiDevpost } from "react-icons/si";

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className={`nav-bar ${scrollPosition > 0 ? 'scrolled' : ''}`}>
    <FontAwesomeIcon 
        onClick={() => setShowNav(true)} 
        icon={faBars} color="#ffd700"
        size="3x"
        className='hamburger-icon' 
        
      />  

    <Link className="logo" to="portfolio_website/" style={{ textDecoration: 'none' }}>
      <img src={Elogo} alt="Logo" />
    </Link>
    {
      
    showNav ? (
      <FontAwesomeIcon 
        onClick={() => setShowNav(false)}
        icon={faClose}
        color="#ffd700"
        size="3x"
        className='close-icon' 
      />
    ) : null
}
    <nav className={showNav ? 'mobile-show' : ''}>

        <NavLink 
          exact="true"
          activeclassname="active"
          to="portfolio_website/"
          onClick={() => setShowNav(false)}
        >        
          <FontAwesomeIcon icon={faHome} color="#F5F5F5" />
          <div>
            Home
          </div>
        </NavLink>

        <NavLink  
          activeclassname="active"
          className="about-link"
          to="portfolio_website/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#F5F5F5" />
          <div>
            About
          </div>
        </NavLink>

        <NavLink 
            activeclassname="active"
            className="resume-link" 
            to="portfolio_website/resume"
            onClick={() => setShowNav(false)}
            >
          <FontAwesomeIcon icon={faSuitcase} color="#F5F5F5" />
          <div>
            Resume
          </div>
        </NavLink>

        <NavLink 
          activeclassname="active"
          className="contact-link"
          to="portfolio_website/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#F5F5F5" />
          <div>
            Contacts
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
