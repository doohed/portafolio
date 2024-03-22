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

const Container = styled.div`
  animation: slide-in 0.8s both;
`;

function Project() {
  return (
    <Container>
      <Head>
        <div>
          <h2>3</h2>
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
            src="https://skillicons.dev/icons?i=vite,js,styledcomponents"
          />
        </div>
      </Stats>
    </Container>
  );
}

export default Project;
