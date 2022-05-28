import React from "react";
import ProjectLayout from "../../layouts/project.layout";

export default function PortfolioProject(){

  const Details = {
    name: "Portfolio Web - Achalogy",
    shortDesc: "My Portfolio web was made with Next js and use a Express Server to stream certificates.",
    img: "cat",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/achalogy/webAchalogy" 
      },
      {
        name: "Preview",
        link: "http://achalogy.ovh"
      }
    ]
  }

  return(
    <ProjectLayout item={Details}>
      <h2>How was it made?</h2>
      <p>We are building this page :D come back later.</p>
      <style jsx>{`
        h2 {
          margin-bottom: 1vh;
        }
        p {
          margin-left: 1vw;
        }
      `}</style>
    </ProjectLayout>
  )

}