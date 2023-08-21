import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Loader from 'react-loaders'
import Logo from './Logo'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className='welcName'>
                    W e l c o m e !
                    </span>
                    <br /> 
                    <br/>
                    I'm {" "}
                    <span className='welcName'>
                     Erick Tepan
                    </span>
                    ,
                    <br/>
                    a student at Lehigh University studying
                    <br/>
                    <span className='welcName'>
                    Computer Science
                    </span>
                    <br/> 
                </h1>
                <h2>
                Software Engineer
                </h2>
                <Link to="/portfolio_website/contact" className='flat-button'>
                    Contact Me
                </Link>
            </div>
            <Loader type="pacman" />
            <Logo />
        </div>
    )
}

export default Home
