import React from "react";
import styled from "styled-components";
import "./ProjectLayout.css";

const Stats = styled.div`
  margin-left: 0px;
  margin-right: 0px;

`;

const Head = styled.div`
  height: 170px;
  text-align: center;
`;

const Options = styled.div`
  margin-top: 10px;
`;

const Project1 = () => {
  return (
    <div>
      <h2>Projects</h2>
      <Head>
        <div>
          <h3>-Product ad page</h3>
        </div>
        <video width="240px" height="150px" autoPlay muted loop>
          <source src="/ecom.webm" type="video/webm" />
        </video>
      </Head>
      <div className="cont">
        <span>A page showcasing a product.</span>
        <span>Front-end page for preview a simple product.</span>
      </div>
      <Stats>
        <div>
          <h4>Tech</h4>
          <img
            className="skill-set"
            src="https://skillicons.dev/icons?i=vite,js"
          />
        </div>
        <Options>
          
        </Options>
      </Stats>
    </div>
  );
};

export default Project1;
