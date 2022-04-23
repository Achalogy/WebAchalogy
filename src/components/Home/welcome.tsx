import React from "react";

export default function WelcomeComponent() {

  return (
    <>
      <div className="welcome">
        <div className="presentation">
          <span>Hi, my name is</span>
          <h1 className="name">Achalogy</h1>
          <h2 className="shortDesc">I am a Full Stack Junior Developer</h2>
          <p>I am a <span>Full Stack Web</span> (Junior) and a <span>Mobile Developer</span> (Junior)<br/>Currently I am Ending my High School.</p>
        </div>
      </div>
      <style jsx>{`
      
        .welcome {
          width: 100vw;
          height: 92vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shortDesc {
          margin-bottom: 2vh;
        }

        .presentation p {
          margin-bottom: 5vh;
        }

      `}</style>
    </>
  )

}