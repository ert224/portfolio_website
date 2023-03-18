import { useEffect, useState } from 'react'
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

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About Me
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
        </div>

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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About