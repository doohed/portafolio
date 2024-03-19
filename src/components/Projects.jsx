import styled from "styled-components";
import "./Home.css";
import "./Projects.css";
import { lazy, useState } from "react";
import Project1 from "./Projects/Project1";

const Cont = styled.div`
  margin: 20px;
`;

const Naav = styled.div`


        @media (max-width:462px){
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
        <button className="arrows back">
          <a>{"<"}</a>
        </button>
        <a className="arrows live" href="https://ecom-eight-tan.vercel.app/">
          <button> Live demo</button>
        </a>
        <a className="arrows source" href="https://github.com/doohed">
          <button>Source</button>
        </a>
        <button className="arrows next">
          <a onClick={set}>{">"}</a>
        </button>
      </Naav>
    </div>
  );
};

export default Projects;
