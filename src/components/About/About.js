import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import devpost_img from '../../assets/images/devpost_projects.jpg';

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">

          <h1>
            Bio
          </h1>
          <h2>
            As an ambitious software engineer, I am passionate about seeking out
            opportunities that can expose me to the latest technologies in the IT
            industry. My goal is to work on diverse and challenging projects that can further enhance my skills and experience.
          </h2>
          <h2>
            My areas of interest include web development, machine
            learning, game development, and backend programming.
            I am continually exploring new technologies and pushing my limits to
            keep pace with the dynamic industry trends.

          </h2>
          <h2>
            As a gay Latino working in the tech field, my identity is an essential
            part of who I am. It is vital for me to find a workplace that embraces
            diversity and inclusivity, where I can feel safe and comfortable being
            myself, so that I can focus on delivering high-quality work without
            worrying about my safety.
          </h2>
          <h2>
            Apart from my work, I enjoy engaging in activities such as board games,
            video games, photography, anime, and sketching. These hobbies help me maintain
            a healthy work-life balance and provide me with a source of inspiration
            and creativity for my projects.
          </h2>

          <h1>Education</h1>
          <h2>
            <b>
              Lehigh University, Bethlehem, PA.&nbsp;
            </b>
            May 2024: Bachelor of Science in Computer Science
          </h2>


          <h2>
            <b>
              High School for Environmental Studies, New York, NY.&nbsp;
            </b>
            June 2020: High School Honors Diploma
          </h2>

          <h1>Skills</h1>
          <h2>Java, Flutter, JavaScript, Python, C, C#, C++, CHARM-GUI, Scheme,
            React, TypeScript, Twilio, Next.js, HTML, CSS,
            MongoDB, PostgreSQL, Dart, Oauth, ElephantSQL, Heroku, Ionic,
            Angular, Capacitor, Unity,
            Fluent in Spanish.
          </h2>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>

          </div>
          <h1>Experience</h1>
          <h2>SEO Scholars, New York, NY</h2>
          <h3>Selected out of over 1,000 students for a rigorous eight-year academic program. Attended numerous college success workshops and networking events. Received one-on-one support in college.</h3>

          <h2>Intuidex, Inc. Bethlehem, PA</h2>
          <h3>Developed and expanded Watchman Analytics™ for iOS and Android. Designed a multipage application with secure login, API integration, and more.</h3>

          <h2>Hackrithmitic 2, Remote</h2>
          <h3>Developed SkyScout, a web app for travelers, using various technologies. Won awards for "Best Use of NLP with Cohere" and "Best Third Overall" in the hackathon.</h3>

          <h2>The Buzz Project CSE 216, Lehigh University, Bethlehem, PA</h2>
          <h3>Collaborated on a project to launch The Buzz application. Utilized several technologies including Heroku, PostgreSQL, Oauth, and more.</h3>

          <h2>Research in Computer-Aided Drug Discovery, Lehigh University, Bethlehem, PA</h2>
          <h3>Integrated knowledge from multiple fields to generate models and simulations of biological systems.</h3>

          <h2>HackHolyoke Hackathon, Remote</h2>
          <h3>Designed a sustainability webpage and won first place in HackHolyoke’s Sustainability category.</h3>


        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About