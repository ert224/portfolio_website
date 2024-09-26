import Loader from 'react-loaders'
import './About.scss'
import lehighUC from '../../assets/images/Lehigh-UC.jpg';

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="content-wrapper">
          <div className="text-zone">
            <h1>Bio</h1>
            <h2>
              As a software engineer, I enjoy experimenting with the latest technologies to tackle diverse and challenging projects. 
              My areas of interest include frontend development, machine learning, game development, and backend programming. 
              I’m passionate about technology and continuous learning, and I enjoy connecting with others who share similar interests.
            </h2>
            <h2>
              As a gay Latino in tech, finding a workplace that values diversity and inclusivity is essential to me. I seek an environment where I can confidently bring my authentic self to work, allowing me to focus on delivering high-quality results. Outside of work, I enjoy board games, video games, photography, anime, and sketching, which help me maintain a healthy work-life balance and fuel my creativity.
            </h2>

            <h1>Education</h1>
            <h2>
              <b>Lehigh University, Bethlehem, PA.&nbsp;</b>
              May 2024: Bachelor of Science in Computer Science
            </h2>

            <h2>
              <b>High School for Environmental Studies, New York, NY.&nbsp;</b>
              June 2020: High School Honors Diploma
            </h2>

            <h1>Skills</h1>
            <h2>
              <b>Programing Languages:&nbsp;</b>
              Java, JavaScript, Python, C, C#, C++, Scheme, TypeScript, SQL, HTML, CSS, Dart, Jade, Bash, Batch
            </h2>
            <h2> 
              <b>Technologies:&nbsp;</b>
              React, Ionic, Angular, Capacitor, Unity, Semantic-UI, CHARM-GUI, Twilio, Next.js, MongoDB, PostgreSQL, ElephantSQL, MSSQL, Oauth, Heroku, Flutter, Spring boot, Maven, Dokku, Docker, Android Studio, Virtualbox 
            </h2>
            <h2>
              <b>Languages:&nbsp;</b>
              Spanish
            </h2>
          </div>
          <div className="image-zone">
            <img src={lehighUC} alt="lehigh UC"></img>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;
