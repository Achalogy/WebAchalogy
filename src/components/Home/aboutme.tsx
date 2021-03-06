import Image from "next/image";
import React from "react";
import catImage from '../../assets/cat.webp'

export default function AboutMeComponent() {

  return(
    <>
      <div className="aboutme" id="AboutMe" data-aos={"fade-up"}>
        <div className="at-aboutme">
          <div className="at-aboutcontent">
            <h2><span>1.</span> About Me</h2>
            <p>
              Hi! My name is Miguel Vargas and I am 16 years old
              <br />
              I am from Colombia and I am currently ending my high school studies.
              My interest in learning about computers started back in 2015 when I was 9 years old
              and I started to learn about computers.
              <br />
              <br />
              Covid quarantine give the enough time and resources to start learning <span>Javascript </span> 
              and then start learning <span>React, React Native, Nest js, Next js</span> and Python.
              <br />
              <br />
              I have knowledge about computers and development that I learn with an autodidact learning, just for fun. Here are a few technologies I have been using this last years:
            </p>
            <ul>
              <li>Javascript / Node Js</li>
              <li>Python</li>
              <li>React - Nextjs</li>
              <li>Nest js</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="cat-img">
            <Image src={catImage} width={420} height={320} alt="Cat With a Computer :D"/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .aboutme {
          width: 100vw;
          height: 100vh;
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