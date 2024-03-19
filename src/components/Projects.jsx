import styled from "styled-components";
import "./Home.css";
import "./Projects.css";
import { lazy, useState } from "react";


const Cont = styled.div`
  margin: 20px;
`;

const Project1 = lazy(
  () => import("./Projects/Project1")
);

const Projects = () => {

  const [loadComponent, setLoadComponent] = useState(false)

  const set = () => {
    setLoadComponent(true);
  }



  return (
    <div>
      <Cont>
        {loadComponent ? <Project1/> : null}
      </Cont>
      <button className="arrows">
          <a >
          {'<'}
          </a>
        </button>
        <button className="arrows">
          <a onClick={set}>
            {'>'}
          </a>
        </button>
    </div>
  );
};

export default Projects;
