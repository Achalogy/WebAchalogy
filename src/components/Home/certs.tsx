import { Router } from "next/router";
import React from "react";

export default function CertsComponent() {

  const certs = [
    {
      "name": "Basic Java (MIN TIC and University Sergio Arboleda)",
      "file": "certificate-java.pdf"
    },
    {
      "name": "Basic Python (MIN TIC and University Sergio Arboleda)",
      "file": "certificate-python.pdf"
    }
  ]

  const CertComp = ({ name, file }: any) => (
    <>
      <div className="cert-obj">
        <p>{name}</p>
        <a className="download-cert" href={`http://storage.achalogy.ovh/download/${file}`} target="_blank" rel="noreferrer" >
          Download
        </a>
      </div>
      <style jsx>{`
      
        .cert-obj {
          widht: 100%;
          height: 3vw;
          border-radius: 10px;
          border: 2px solid #defbf680;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1vw;
          margin: 0.5vw;
        }
      
        .download-cert {
          aspect-ratio: 3/1;
          width: 100px;
          background-color: #af4a4a;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      
      `}</style>
    </>    
  )

  return(
    <>
      <div className="certs">
        <div className="at-certs">
          <h2><span>2.</span> Certificates</h2>
          <ul>
            {certs.map(cert => (
              <li>
                <CertComp name={cert.name} file={cert.file} />
              </li>
            ))
            }
          </ul>
        </div>
      </div>
      <style jsx>{`
      
        .certs {
          width: 100vw;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .at-certs {
          height: 50vh;
          width: 50vw;
          padding: 1vw;
          display: flex;
          flex-direction: column;
        }

        ul {
          list-style: none;
          columns: 1;
          -webkit-columns: 1;
          -moz-columns: 1;
        }

      `}</style>
    </>
  )

}