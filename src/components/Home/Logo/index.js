import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import erickImg from '../../../assets/images/self_portrait/flannel_01.png';
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.7,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo"
        ref={solidLogoRef}
        src={erickImg}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
