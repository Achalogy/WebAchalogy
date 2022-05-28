import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type link = {
  name: string,
  link: string
}

type project = {
  children: any,
  item: {
    name: string,
    shortDesc: string,
    img: string,
    links: link[]
  }
}

export default function ProjectLayout({ children, item }: project) {

  const [isPhone, phone] = useState(false)

  const router = useRouter()

  useEffect(() => {
    phone(window.innerWidth < 1000)
  }, [])

  return(
    <>
      <div className="back-button" onClick={() => router.push('/')} >
        <FontAwesomeIcon icon={faAngleLeft} color="#fff" size={isPhone ? '1x' : '2x'} />
        <label>Back</label>
      </div>
      <div className="at-project" data-aos={"fade-up"} >
        <header className="project-description">
          <div className="proj-desc">
            <div className="details">
              <h2>{item.name}</h2>
              <p>{item.shortDesc}</p>
            </div>
            <div className="project-image">
              <Image src={require(`../assets/project-image/${item.img}.png`)} alt="Cat With a Computer :D" />
            </div>
          </div>
          <div className="links">{item.links.map(a => (
            <a href={a.link} target="_blank" >{a.name}</a>
          ))}</div>
        </header>
        <div className="child">
          {children}
        </div>
      </div>
      <style jsx>{`
      
        .back-button {
          display: flex;
          align-items: center;
          height: 3vw;
          padding-inline: 1vw;
          width: 6vw;
          cursor: pointer;
        }

        .back-button label {
          color: #fff;
          font-size: 1vw;
          font-weight: 500;
          margin-left: 1vw;
          cursor: pointer;
        }

        .at-project {
          min-height: 100vh;
        }
        
        .project-description {
          background-color: #ffffff10;
          margin-inline: 5vw;
          margin-bottom: 3vh;
          border-radius: 1vh;
          display: flex;
          flex-direction: column;
        }
        
        .proj-desc {
          min-height: 30vh;
          display: flex;
        }

        p {
          margin-top: 1vh;
          margin-left: 2vw;
        }

        .details {
          flex: 6;
          height: 100%;
          padding: 3vw;
        }

        .project-image {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 2vw;
        }

        .links {
          display: flex;
          margin-inline: 3vw;
          border-top: 1px solid #ffffff20;
          padding-inline: 1vw;
          padding-block: 1vh;
          justify-content: right;
        }

        a {
          color: #2e97d3;
          margin-inline: 0.5vw;
          font-size: 0.8vw;
        }

        .child {
          margin-inline: 10vw;
        }

        @media screen and (max-width: 1000px) {
          
          .back-button {
            height: 5vh;
            margin-left: 3vw;
            width: 15vw;
          }

          .back-button label {
            font-size: 4vw;
          }

          a {
            font-size: 3.5vw;
          }

          .proj-desc {
            flex-direction: column;
          }

          .project-image {
            padding: 10vw;
          }

          .details {
            margin: 2vw;
          }

          .project-description {
            margin: 2vw;
            margin-top: 0;
            margin-bottom: 3vh;
          }

        }

      `}</style>
    </>
  )

}