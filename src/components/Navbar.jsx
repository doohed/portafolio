import { styled } from "styled-components";
import Projects from "../Projects";

const Section = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 2;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
  width: 900px;
  justify-content: space-between;
  min-width: 274px;

  @media (max-width: 870px) {
    width: 76vw;
    left: 12vw;
    transform: translate(0%, 0%);
  }
  @media (max-width: 492px) {
    left: 0%;
    margin-left: 0vw;
    width: 100vw;
  }
`;

const Blur = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
  background-color: #ffffff01;
  height: 55px;
  width: 101%;
  backdrop-filter: blur(10px);
`;

const Title = styled.div`
  margin-top: 18px;
  margin-left: 4px;
  display: flex;
  @media (max-width: 331px) {
    width: 10px;
    height: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin-right: 12px;
`;

const ListItem = styled.a`
  cursor: pointer;
  color: #e0e0e0;
  text-decoration: none;
  height: 10px;
  &:hover {
    color: white;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }

  @media (prefers-color-scheme: light) {
    color: #242424;
    &:hover {
      color: #4d4d4d;
    }
  }
`;

const Navbar = () => {
  return (
    <div className="navbar">
      <Blur></Blur>
      <Section>
        <Title className="title">
          <ListItem href="/">
            <svg
              className="cat"
              width="40px"
              height="23px"
              viewBox="0 0 50.8 50.8"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g transform="translate(-4.084 -1.09) scale(1.1608)">
                  {" "}
                  <ellipse
                    className="cat"
                    cx="25.4"
                    cy="27.384"
                    fill="none"
                    stroke="#ffffff"
                    rx="13.891"
                    ry="12.303"
                  ></ellipse>{" "}
                  <g transform="translate(.352 -1.536)">
                    {" "}
                    <circle cx="20.021" cy="23.217" r="1.368"></circle>{" "}
                    <circle cx="30.075" cy="23.217" r="1.368"></circle>{" "}
                  </g>{" "}
                  <g className="cat" fill="none" stroke="#ffffff">
                    {" "}
                    <path d="M23.316 25.102s4.465 9.03 7.64 3.473"></path>{" "}
                    <path d="M27.484 25.102s-4.465 9.03-7.64 3.473"></path>{" "}
                    <path d="M21.927 30.66s1.091 4.861 3.473 4.861m3.473-4.861s-1.091 4.86-3.473 4.86"></path>{" "}
                  </g>{" "}
                  <path
                    fill="none"
                    className="cat"
                    stroke="#ffffff"
                    d="m15.676 18.157.298-12.204 7.342 8.731m11.808 3.076V5.953l-7.64 8.334"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </ListItem>
          <ListItem href="/">
            <span className="name">Martin Bojorquez</span>
          </ListItem>
        </Title>
        <Links>
          <List>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="https://github.com/doohed/portafolio">
              Source
            </ListItem>
          </List>
        </Links>
      </Section>
    </div>
  );
};

export default Navbar;
