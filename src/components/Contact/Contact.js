import Loader from 'react-loaders'
import './Contact.scss'

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
              Personal Information
            </h2>
            Name: Erick Tepan
            <br/>
            Email: erick.tepan2001@gmail.com
            <br/>
            Phone:  347-526-8228
          </div>

          <div className='map-wrap'>  

          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact