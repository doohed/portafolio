import styled from "styled-components";
import "./Home.css";
import "./Projects.css";
import { lazy, useState } from "react";
import Project1 from "./Projects/Project1";

const Cont = styled.div`
  margin: 20px;
`;

const Naav = styled.div`

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
          <button className="arrows">
            <a>{"<"}</a>
          </button>
          <a className="arrows" href="https://ecom-eight-tan.vercel.app/">
            <button> Live demo</button>
          </a>
          <a className="arrows" href="https://github.com/doohed">
            <button>Source</button>
          </a>
          <button className="arrows">
            <a onClick={set}>{">"}</a>
          </button>
        </Naav>
    </div>
  );
};

export default Projects;
