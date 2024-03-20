import React from "react";
import styled from "styled-components";
import "./ProjectLayout.css";

const Stats = styled.div`
  margin-left: 0px;
  margin-right: 0px;

`;

const Head = styled.div`
  text-align: center;
`;

const Options = styled.div`
  margin-top: 10px;
`;

const Project1 = () => {
  return (
    <div>
      
      <Head>
        <div>
        <h2>Projects</h2>
          <h3> - Product ad page - </h3>
        </div>
        <video width="292px" height="168.75px" autoPlay muted loop>
          <source src="/ecom.webm" type="video/webm" />
        </video>
      </Head>
      <div className="cont">
        <p>Simple user friendly page with interactive 3D models.</p>
      </div>
      <Stats>
        <div>
          <h4>Tech</h4>
          <img
            className="skill-set"
            src="https://skillicons.dev/icons?i=vite,js"
          />
        </div>
      </Stats>
    </div>
  );
};

export default Project1;
