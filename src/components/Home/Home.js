import { Link } from 'react-router-dom'
import './Home.scss'
import Loader from 'react-loaders'
import Logo from './Logo'
import lehighAlum from '../../assets/images/lehigh_alumn_build.jpg';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="content-wrapper">
                <div className="text-zone">
                    <h1>
                        <span className='welcName'>
                        W e l c o m e !
                        </span>
                    </h1>
                    <br/>
                    <br/>

                    <h1>
                        I'm {" "}
                        <span className='welcName'>
                        Erick Tepan
                        </span>
                        , a student at 
                    </h1>
                    <h1>
                        Lehigh University studying
                    </h1>
                    <h1>
                        <span className='welcName'>
                        Computer Science
                        </span>
                    </h1>

                    <br/> 
                    <Link to="/portfolio_website/contact" className='flat-button'>
                        Contact Me
                    </Link>
                </div>
                <div className="image-zone">
                    <img src={lehighAlum} alt="lehigh UC"></img>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Home;
