import Head from 'next/head'
import { useEffect, useState } from 'react'
import AboutMeComponent from '../components/Home/aboutme'
import CertsComponent from '../components/Home/certs'
import WelcomeComponent from '../components/Home/welcome'
import 'aos/dist/aos.css'
import AOS from 'aos'

export default function Home () {

  const [isPhone, phone] = useState(false)

  useEffect(() => {
    phone(window.innerWidth < 1000)
    AOS.init({
      duration: 1500
    })
  }, [])

  return (
    <>
      <Head>
        <title>Achalogy</title>
      </Head>
      {!isPhone &&
        <div className='navbar'>
          <ul>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Certs">Certificates</a></li>
          </ul>
          <a className="contact" href='mailto:achalogy@gmail.com'>
            Contact
          </a>
        </div>
      }
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

      `}</style>
    </>
  )
}