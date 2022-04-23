import { useEffect, useState } from 'react'
import AboutMeComponent from '../components/Home/aboutme'
import WelcomeComponent from '../components/Home/welcome'

export default function Home () {

  const [visible, isVisible] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 1000) {
      alert('Pagina no Optimizada para Dispositivos moviles')
      isVisible(false)
    }
  }, [])

  return (
    <>
      {visible == true &&
        <>
          <div className='navbar'>
            <a className="contact" href='mailto:achalogy@gmail.com'>
              Contact
            </a>
          </div>
          <WelcomeComponent />
          <AboutMeComponent />
          <footer>
            <p>Designed and Builded by <span>Achalogy</span>
              <br />
              <a href='https://www.freepik.es/vectores/gato-animado'>Vector de gato animado creado por catalyststuff - www.freepik.es</a>
            </p>
          </footer>
        </>
      }
      <style jsx>{`
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