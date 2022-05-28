import Head from 'next/head'
import { useEffect, useState } from 'react'
import AboutMeComponent from '../components/Home/aboutme'
import CertsComponent from '../components/Home/certs'
import WelcomeComponent from '../components/Home/welcome'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import githubLogo from '../assets/github.webp'
import fccLogo from '../assets/fcc.webp'
import Image from "next/image";

export default function Home () {

  const [isPhone, phone] = useState(false)
  const [deployed, deploy] = useState(false)
  const [off, setOff] = useState(0)

  useEffect(() => {
    phone(window.innerWidth < 1000)
    AOS.init({
      duration: 1500
    })
    setInterval(() => {
      setOff(window.pageYOffset)
    }, 5)
  }, [])

  return (
    <>
      <Head>
        <title>Achalogy</title>
      </Head>
      {isPhone && deployed &&
        <div className='at-mobile-menu' data-aos="fade-left">
          <div className="close">
            <FontAwesomeIcon icon={faX} color="#fff" size='lg' onClick={() => /* deploy(false) */ null} />
          </div>
        </div>
      }
      {!isPhone ?
        <div className='navbar'>
          <ul>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Certs">Certificates</a></li>
          </ul>
          <a className="contact" href='mailto:achalogy@gmail.com'>
            Contact
          </a>
        </div>
        :
        <div className="mobile-menu">
          <FontAwesomeIcon icon={faBars} color="#9bc2fd" size='2x' onClick={() => /* deploy(true) */ null} />
        </div>
      }
      <div className='left-float' style={{ opacity: off != 0 ? 0.2 : 1 }} data-aos="fade-right">
        <div className="left-button">
          <a href="https://github.com/Achalogy" target="_blank">
            <Image src={githubLogo} width={50} height={50} alt="Github" />
          </a>
        </div>
        <div className="left-button">
          <a href="https://www.freecodecamp.org/Achalogy" target="_blank">
            <Image src={fccLogo} width={50} height={34.0136} alt="Github" />
          </a>
        </div>
      </div>
      <WelcomeComponent />
      <AboutMeComponent />
      <CertsComponent />
      <footer>
        <p>Designed and Builded by <span>Achalogy</span>
          <br />
          <a href='https://www.freepik.es/vectores/gato-animado'>Vector de gato animado creado por catalyststuff - www.freepik.es</a>
        </p>
      </footer>
      <style jsx>{`

        .left-float {
          position: fixed;
          min-height: 2vw;
          min-width: 2vw;
          padding: 0.3vw;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        .left-button {
          background-color: transparent;
          height: 3vw;
          width: 3vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .close {
          width: 100%;
          display: flex;
          padding: 5vw;
          justify-content: end;
          align-items: center;
        }

        .at-mobile-menu {
          position: fixed;
          height: 100vh;
          width: 80vw;
          background-color: #05080a;
          right: 0;
          z-index: 1;
        }

        .mobile-menu {
          width: 100vw;
          height: 8vh;
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 6vw;
        }

        .navbar ul {
          list-style: none;
          margin: 0 1vw;
          width: 100%;
          padding: 0;
          justify-content: end;
          display: flex;
          flex-direction: row;
        }

        .navbar li {
          margin: 0 1vw;
        }

        .navbar {
          height: 8vh;
          width: 100vw;
          display: flex;
          justify-content: end;
          align-items: center;
          padding: 0 1vw;
        }
        
        .contact {
          background: transparent;
          color: #2e97d3;
          border-radius: 5px;
          border: 1px solid #2e97d3;
          padding: 0.4vw 0.7vw;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact:hover {
          color: #2eaed3;
          border: 1px solid #2eaed3;
          background: rgba(256, 256, 256, 0.03);
        }

        footer p {
          text-align: center;
          margin: 1vh;
        }

        @media screen and (max-width: 1000px) {
          .left-float {
            min-height: 2vh;
            min-width: 2vh;
            padding: 0.7vh;
          }
          .left-button {
            height: 3.5vh;
            width: 3.5vh;
            margin: 1vw;
          }
        }

      `}</style>
    </>
  )
}