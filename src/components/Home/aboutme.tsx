import Image from "next/image";
import React from "react";
import catImage from '../../assets/cat.webp'

export default function AboutMeComponent() {

  return(
    <>
      <div className="aboutme">
        <div className="at-aboutme">
          <div className="at-aboutcontent">
            <h2><span>1.</span> About Me</h2>
            <p>
              Hi! My name is Miguel Vargas and I am 16 years old
              <br />
              I am from Colombia and I am currently ending my high school studies.
              My interest in learning about computers started back in 2015 when I was 9 years old
              and I started to use computers.
              <br />
              <br />
              Covid quarantine give the enough time and resources to start learning about <span>Javascript </span> 
              and then start with my studies about <span>React, React Native, Nest js, Next js</span> and other technologies.
              <br />
              <br />
              I learned most everything I known about computers and development with an autodidact learning, just for fun. Here are a few technologies I have been using this last years:
            </p>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>React - Nextjs</li>
              <li>Nest js</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="cat-img">
            <Image src={catImage} width={420} height={320} alt="Cat Developer :3"/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .aboutme {
          width: 100vw;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .at-aboutme {
          height: 50vh;
          width: 60vw;
          padding: 1vw;
          display: flex;
          align-items: center;
        }

        h2 {
          text-align: start;
          margin-bottom: 4vh;
        }

        p {
          margin-left: 1vw;
          width: 30vw;
        }

        ul {
          width: 20vw;
        }

        li {
          color: #defbf6;
        }

        .cat-img {
          height: 320px;
          margin-left: 5vw;
        }

        @media screen and (max-width: 1000px) {
          .at-aboutme{
            flex-direction: column;
          }

          .at-aboutcontent{
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h2 {
            text-align: center;
          }

          .at-aboutcontent p{
            width: 90vw;
          }

          ul{
            width: 60vw;
          }

          .cat-img{
            margin: 0;
            padding: 10vw;
          }

          .at-aboutme{
            margin-bottom: 5vh;
          }

        }

      `}</style>
    </>
  )

}