import './Navbar.scss';
import { useState,useEffect } from 'react';
import LogoS from '../../assets/images/letter_E.png';
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
    <Link className="logo" to="portfolio_website/" style={{ textDecoration: 'none' }}>
      <img src={LogoS} alt="Logo" />
      <p className='name'>Erick Tepan</p>
    </Link>

    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="portfolio_website/"
          onClick={() => setShowNav(false)}
        >        
          <FontAwesomeIcon icon={faHome} color="#F5F5F5" />
        </NavLink>

        <NavLink  
          activeclassname="active"
          className="about-link"
          to="portfolio_website/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#F5F5F5" />
        </NavLink>

        <NavLink 
            activeclassname="active"
            className="resume-link" 
            to="portfolio_website/resume"
            onClick={() => setShowNav(false)}
            >
          <FontAwesomeIcon icon={faSuitcase} color="#F5F5F5" />
        </NavLink>

        <NavLink 
          activeclassname="active"
          className="contact-link"
          to="portfolio_website/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#F5F5F5" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/erick-tepan-038118226/"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faLinkedin} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://devpost.com/ert224"
            target="_blank"
            rel="noreferrer"
          >
          <SiDevpost/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ert224"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://bitbucket.org/ert224/"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faBitbucket} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  );
}

export default Navbar;
