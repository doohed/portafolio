import { useEffect, useRef, useState } from "react";
import "./Home.css";
import Projects from "./Projects";
import styled from "styled-components";

const Presentation = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  height: 370px;
  height: 300px;
  text-align: left;

  @media (max-width: 870px) {
    height: auto;
    width: auto;
    left: 3vw;
    transform: translate(0%, 0%);
    grid-row-start: auto;
    grid-row-end: auto;
  }
`;
const Skills = styled.div`
 
  @media (max-width: 870px) {
    margin-top: 12px;
    grid-row-start: auto;
    grid-row-end: auto;
  }
`;
const Terminal = styled.div`
  cursor: pointer;
  grid-row-start: 4;
  grid-row-end: 5;
  @media (max-width: 870px) {
    height: 180px;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const SkillsCont = styled.div``;

const Content = styled.div`
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 120px 100px 100px 200px;
  grid-template-columns: 500px;
  margin-top: 10px;
  overflow-x: hidden;
  @media (max-width: 870px) {
    margin-left: 0vw;
    width: 74vw;
    min-width: 0px;
    grid-template-rows: auto;
    grid-template-columns: auto;
  }

  @media (max-width: 492px) {
    margin-left: 0vw;
    width: 100%;
    min-width: 0px;
    grid-template-rows: auto;
    grid-template-columns: auto;
  }



`;

const Socials = styled.div`
  text-align: center;
  grid-row-start: 1;
  grid-row-end: 3;
  @media (max-width: 870px) {
    grid-row-start: 5;
  grid-row-end: auto;
    bottom: 10px;
  }
`;

const Procont = styled.div`
  text-align: center;
  grid-row-start: 3;
  grid-row-end: 6;
  @media (max-width: 870px) {
    grid-row-start: 4;
    grid-row-end: auto;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 120px;

  @media (max-width: 456px) {
    margin-bottom: 35px;
    height: 110px;
  }
`;

const Cont = styled.div`
  margin: 15px;
`;

const SocialIcons = styled.div``;

function Home() {
  const text = [
    "  Sometimes programming is more about the process and what you give to people rather than the money :)",
    " My daily drive is Linux, I been hopping through a lot of distros (like arch btw) but for now I'll stay with Ubuntu",
    " My favorite games are the souls saga",
    " Let's keep trying, Never give up!!",
    " When I'm not online, I love going out on my bike",
    " There's my contact info down there...",
    " I'm still looking for a job :c",
    " I love minimalism thats the reason I prefer linux",
    " I usually code as a hobby",
  ];

  const [count, setCount] = useState(1);
  const [targetText, setTargetText] = useState(text[0]);
  const Arrow = ">> ";

  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [targetText]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + targetText.charAt(index.current));
      index.current += 1;
    }, 20);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, targetText]);

  function changeT() {
    setCount(count + 1);
    setTargetText(text[count]);
    if (count === 8) {
      setCount(0);
    }
  }

  return (
    <div className="landing">
      <Container id="home">
        <Presentation className="box">
          <Cont>
            <Head>
              <div>
                <h2>Martin Bojorquez</h2>
                <h3> ~ Fullstack web developer</h3>
              </div>
              <img
                className="avatar"
                src="https://avatars.githubusercontent.com/u/89823707?v=4"
              />
            </Head>
            <br />
            <p>
              Based in <span className="accent">Mexico</span> with a passion for
              building digital services.
            </p>
            <p>
              I like planning and designing all the way to <span className="accent">solving real-life
              problems with code.</span>
            </p>
          </Cont>
        </Presentation>
        <Skills className="box">
          <SkillsCont>
            <h2>Skills</h2>
            <div className="icons-holder">
              <img
                className="skill-set skills"
                src="https://skillicons.dev/icons?i=react,next,vue,vite"
              />
              <img
                className="skill-set skills"
                src="https://skillicons.dev/icons?i=tailwind,nodejs,mongodb,linux"
              />
            </div>
          </SkillsCont>
        </Skills>
        <Terminal onClick={changeT} className="box">
        
            <h2>About</h2>
        
          <Content>
            <span className="Ttext">
              {Arrow}
              {currentText}
            </span>
          </Content>
        </Terminal>
        <Socials className="box">
          <h2>Socials</h2>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/bojorquez-godina-martin-esteban-908609270/">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/1488/PNG/96/5296-linkedin_102551.png"
              />
            </a>
            <a href="https://github.com/doohed">
              <svg
                width="40px"
                height="60px"
                viewBox="0 -2 20.00 20.00"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g id="Page-1" fill="none">
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#ffffff"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a href="https://www.instagram.com/dohed_/">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/1584/PNG/96/3721672-instagram_108066.png"
              />
            </a>
            <a href="https://steamcommunity.com/id/dodoshi/">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/3053/PNG/96/steam_alt_macos_bigsur_icon_189698.png"
              />
            </a>
          </SocialIcons>
        </Socials>

        <Procont className="box">
          <Projects />
        </Procont>
      </Container>
    </div>
  );
}

export default Home;
