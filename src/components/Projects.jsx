import styled from "styled-components";
import "./Home.css";
import "./Projects.css";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import { useEffect, useState } from "react";

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

function Projects() {
  const prods = [
    {
      page: <Project1 />,
    },
    {
      page: <Project2 />,
    },
    {
      page: <Project3 />,
    },
  ];

  const [count, setCount] = useState(0);
  const [currentProject, setCurrentProject] = useState(prods[count]);
  const [animation, setAnimation] = useState("");
  const [currentAnimation, setCurrentAnimation] = useState("");



  useEffect(() => {
    console.log(prods[count].page);
    return setCurrentProject(prods[count]);
  }, [count]);

  function onClickHandlePlus() {
    setAnimation("right");
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function onclickHandleLess() {
    setAnimation("left");
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="projects">
      <Cont>{currentProject.page}</Cont>
      <Naav>
        <a onClick={onclickHandleLess}>
          <button className="arrows back">{"<"}</button>
        </a>
        <a href="https://ecom-eight-tan.vercel.app/">
          <button className="arrows live"> Live demo</button>
        </a>
        <a href="https://github.com/doohed/ecom">
          <button className="arrows source">Source</button>
        </a>
        <a onClick={onClickHandlePlus}>
          <button className="arrows next">{">"}</button>
        </a>
      </Naav>
    </div>
  );
}

export default Projects;
