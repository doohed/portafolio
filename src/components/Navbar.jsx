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
  width: 800px;
  justify-content: space-between;

  @media (max-width: 810px) {
    width: 90vw;
    left: 6vw;
    transform: translate(0%, 0%);
  }
`;

const Blur = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 2;
  left: 50%;
  top: 0%;
  transform: translate(-50%, 0%);
  background-color: #00000060;
  height: 55px;
  width: 101%;
  justify-content: space-between;
  backdrop-filter: blur(10px);
`;

const Title = styled.div`
  margin-top: 18px;
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
  margin-right: 20px;
`;

const ListItem = styled.a`
  cursor: pointer;
  color: #e0e0e0;
  text-decoration: none;
  &.name:hover {
    color: white;
  }

  @media (max-width: 400px) {
    font-size:12px;
  }


`;

const Navbar = () => {
  return (
    <div className="navbar">
      <Blur></Blur>
      <Section>
        <Title>
          <ListItem href="/">
            <svg
              width="40px"
              height="23px"
              viewBox="0 0 50.8 50.8"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  stroke-width="2.735"
                  transform="translate(-4.084 -1.09) scale(1.1608)"
                >
                  {" "}
                  <ellipse
                    cx="25.4"
                    cy="27.384"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    rx="13.891"
                    ry="12.303"
                  ></ellipse>{" "}
                  <g transform="translate(.352 -1.536)">
                    {" "}
                    <circle cx="20.021" cy="23.217" r="1.368"></circle>{" "}
                    <circle cx="30.075" cy="23.217" r="1.368"></circle>{" "}
                  </g>{" "}
                  <g
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M23.316 25.102s4.465 9.03 7.64 3.473"></path>{" "}
                    <path d="M27.484 25.102s-4.465 9.03-7.64 3.473"></path>{" "}
                    <path d="M21.927 30.66s1.091 4.861 3.473 4.861m3.473-4.861s-1.091 4.86-3.473 4.86"></path>{" "}
                  </g>{" "}
                  <path
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m15.676 18.157.298-12.204 7.342 8.731m11.808 3.076V5.953l-7.64 8.334"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </ListItem>
          <ListItem className="name" href="/">
            Martin Bojorquez
          </ListItem>
        </Title>
        <Links>
          <List>
            <ListItem href="/">Home</ListItem>
            <ListItem href={<Projects />}>Projects</ListItem>
          </List>
        </Links>
      </Section>
    </div>
  );
};

export default Navbar;
