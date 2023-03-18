import Loader from 'react-loaders'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faBitbucket, } from '@fortawesome/free-brands-svg-icons';
import { SiDevpost } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contacts
          </h1>
          <div className="contact-form">
            <h2>
              {/* Personal Information */}
            Name: Erick Tepan
            <br/>
            Email: erick.tepan2001@gmail.com
            <br/>
            Phone: 347-526-8228
            </h2>
            <div className='logo_icons'>
                <a
                  href="https://www.linkedin.com/in/erick-tepan-038118226/"
                  target="_blank"
                  rel="noreferrer"
                  >
                <FontAwesomeIcon icon={faLinkedin} color="#F5F5F5" className="anchor-icon"/>
                </a>
                <a
                  href="https://devpost.com/ert224"
                  target="_blank"
                  rel="noreferrer"
                  >
                <SiDevpost/>
                </a>
                <a
                  href="https://github.com/ert224"
                  target="_blank"
                  rel="noreferrer"
                  >
                  <FontAwesomeIcon icon={faGithub} color="#F5F5F5" className="anchor-icon"/>
                </a>
                <a
                  href="https://bitbucket.org/ert224/"
                  target="_blank"
                  rel="noreferrer"
                  >
                <FontAwesomeIcon icon={faBitbucket} color="#F5F5F5" className="anchor-icon"/>
                </a>
              </div>

          </div>

          <div className='map-wrap'>  
              
            <iframe 
              title='gmaps'
              width="600" 
              height="600" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=Lehigh%20University&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0"
            >
            </iframe>
          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact