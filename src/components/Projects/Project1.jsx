import React from "react";
import styled from "styled-components";

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const Project1 = () => {
  return (
    <div>
      <h2>Projects</h2>
      <Head>
        <div>
          <h3>Ecom</h3>
        </div>
        <img className="projectP" src="/ecom.png" />
      </Head>
      <div className="cont">
        <span>Ecommerce front-end page for preview a simple product.</span>
        <br />
        <br />
        <span>With this project I learned how to use threejs</span>
      </div>
      <Stats>
        <div>
          <h4>Tech</h4>
          <img
            className="skill-set"
            src="https://skillicons.dev/icons?i=vite,js"
          />
        </div>
        <div>
          <h4>Live demo</h4>
          <a href="https://ecom-eight-tan.vercel.app/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="iconss"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </a>
        </div>
        <div>
          <h4>Source</h4>
          <a href="https://github.com/doohed">
            <img
              className="iconss"
              src="https://cdn.icon-icons.com/icons2/2406/PNG/96/github_git_icon_145985.png"
            />
          </a>
        </div>
      </Stats>
    </div>
  );
};

export default Project1;
