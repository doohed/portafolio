import styled from "styled-components";
import "./Home.css";
import "./Projects.css";
import { lazy, useState } from "react";
import Project1 from "./Projects/Project1";

const Cont = styled.div`
  margin: 20px;
`;

const Naav = styled.div`
margin-bottom: 10px;
  @media (max-width: 462px) {
    justify-content: space-between;
    align-items: center;
  }
`;

const Projects = () => {
  const [loadComponent, setLoadComponent] = useState(false);

  const set = () => {
    setLoadComponent(true);
  };

  return (
    <div>
      <Cont>
        <Project1 />
      </Cont>
      <Naav>
        <a  onClick={set}>
          <button className="arrows back">{"<"}</button>
        </a>
        <a  href="https://ecom-eight-tan.vercel.app/">
          <button className="arrows live"> Live demo</button>
        </a>
        <a  href="https://github.com/doohed/ecom">
          <button className="arrows source">Source</button>
        </a>
        <a  onClick={set}>
          <button className="arrows next">{">"}</button>
        </a>
      </Naav>
    </div>
  );
};

export default Projects;