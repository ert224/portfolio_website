import './Navbar.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/letter_E.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faBitbucket, } from '@fortawesome/free-brands-svg-icons';
import { faHome,faUser,faEnvelope,faSuitcase,faClose,faBars,} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { SiDevpost } from "react-icons/si";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
    <Link className="logo" to="/" style={{ textDecoration: 'none' }}>
      <img src={LogoS} alt="Logo" />
      <p className='name'>Erick Tepan</p>
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink to="/" >
          <FontAwesomeIcon icon={faHome} color="#F5F5F5" />
        </NavLink>

        <NavLink className="about-link" to="/about" >
          <FontAwesomeIcon icon={faUser} color="#F5F5F5" />
        </NavLink>

        <NavLink className="resume-link" to="/resume">
          <FontAwesomeIcon icon={faSuitcase} color="#F5F5F5" />
        </NavLink>

        <NavLink className="contact-link" to="/contact" >
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
        <li>
          <a
            href="https://devpost.com/ert224"
            target="_blank"
            rel="noreferrer"
          >
          <SiDevpost/>
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
