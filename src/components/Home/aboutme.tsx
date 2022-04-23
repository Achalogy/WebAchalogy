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
              Hi! My name is Miguel Vargas and I am 16 Years Old
              <br />
              I am from Colombia and I am currently ending my High School Studies
              My Interest in learning about Computers started back in 2015 when I was 9 years old
              and I started to use Computers.
              <br />
              <br />
              Covid Quarantine give the enough time and resources to start learning about <span>Javascript</span>
              and then start with my studies about <span>React, React Native, Nest js, Next js</span> and another technologies.
              <br />
              <br />
              I learned most everything I known about Computers and Development with a autodidact learning, just for fun. Here are a few technologies I've been using this last years:
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
            <Image src={catImage} width={420} height={320} />
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

      `}</style>
    </>
  )

}