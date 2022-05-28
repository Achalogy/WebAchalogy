import React from "react";
import catImage from '../../assets/cat.webp'
import Image from "next/image";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

type proj = {
  item: {
    name: string,
    description: string,
    code: string
  },
  index: number
} 

export default function ProjectsComponent() {

  const projects = [
    {
      "name": "Portfolio Web - Achalogy",
      "description": "My Portfolio web was made with Next js and use a Express Server to stream certificates.",
      "code": "portfolio"
    },
  ]

  const Project = ({ item, index }: proj) => {
    const router = useRouter()

    return(
      <>
        <a onClick={() => router.push('/projects/' + item.code) }>
          <div className="project-item" style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }}>
            <div className="text" style={{ marginInline: 5 }}>
              <h3 style={{ textAlign: index % 2 == 0 ? 'right' : 'left' }} >{item.name}</h3>
              <p style={{ textAlign: index % 2 == 0 ? 'right' : 'left' }} >{item.description}</p>
            </div>
            <div className="project-image">
              <Image src={require(`../../assets/project-image/${item.code}.png`)} alt="Cat With a Computer :D" />
            </div>
          </div>
        </a>
        <style jsx>{`
          .project-item {
            width: 100%;
            padding: 1vw;
            display: flex;
          }

          h3 {
            color: #fff;
            margin-inline: 1vw;
          }

          .text {
            flex: 6;
          }

          .project-image {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 2vw;
          }

          img {
            width: 10px !important;
          }

          a {
            cursor: pointer;
          }

          @media screen and (max-width: 1000px) {
            h3 {
              font-size: 3.5vw;
            }
            p {
              font-size: 2.5vw;
            }
          }

        `}</style>
      </>
    )
  }

  return (
    <>
      <div className="projects" data-aos={"fade-up"}>
        <div className="at-projects">
          <h2><span>3.</span> Projects</h2>
            {projects.map((project, index) => (
              <Project item={project} index={index}/>
            ))
            }
        </div>
      </div>
      <style jsx>{`
      
        .projects {
          width: 100vw;
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .at-projects {
          min-height: 50vh;
          width: 50vw;
          padding: 1vw;
          display: flex;
          flex-direction: column;
          margin-bottom: 10vh;
        }

        @media screen and (max-width: 1000px) {
          .at-projects {
            width: 90vw;
          }
        }

      `}</style>
    </>
  )

}