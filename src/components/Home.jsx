import { useEffect, useRef, useState } from "react";
import "./Home.css";
import Projects from "./Projects";
import styled from "styled-components";

const Presentation = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: left;
  @media (max-width: 810px) {
    width: auto;
    left: 3vw;
    transform: translate(0%, 0%);
    grid-row-start: auto;
    grid-row-end: auto;
  }
`;
const Skills = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 810px) {
    margin-top: 12px;
  }
`;
const Terminal = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 800px) {
    height: 170px;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const SkillsCont = styled.div`
`;

const Title = styled.div`
  text-align: center;
  min-height: 10px;
  background-color: #ffffff10;
  margin-top: -21px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Content = styled.div`
  text-align: left;
  margin: 10px;
`;

const Container = styled.div`
  display: grid;
  height: 70vh;
  grid-template-rows: 230px 200px 160px 150px;
  grid-template-columns: 400px 400px;
  
  @media (max-width: 810px) {
    width: 75vw;
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
`;

const Socials = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  @media (max-width: 810px) {
    bottom: 10px;
  }
`;

const Procont = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  grid-row-start: 2;
  grid-row-end: 5;
  @media (max-width: 800px) {
    grid-row-start: 4;
    grid-row-end: auto;
  }
  
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 170px;
`;

const Cont = styled.div`
  margin: 15px;
`;

const SocialIcons = styled.div``;

function Home() {
  const text = [
    "  Sometimes programming is more about the process and what you give to people rather than the money :)",
    " My daily drive is Linux, I been hoping through a lot of distros (like arch btw) but for now I'll stay with Ubuntu",
    " My favorite games are the souls saga",
    " Let's keep trying, Never give up!!",
    " When I'm not online, I love going out on my bike",
    " There's my contact info down there...",
    " I'm still looking for a job :(",
    " I love minimalism that's the reason I prefer linux",
    " I usually code as a hobby",
    "",
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
        <Presentation>
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
            <span>
              Based in Mexico with a passion for building digital services.
            </span>
            <br />
            <br />
            <span>
              I like planning and designing all the way to solving real-life
              problems with code.
            </span>
          </Cont>
        </Presentation>
        <Skills>
          <SkillsCont>
            <h2>Skills</h2>
            <div className="icons-holder">
              <img
                className="skill-set"
                src="https://skillicons.dev/icons?i=react,next,vue,vite"
              />
              <img
                className="skill-set"
                src="https://skillicons.dev/icons?i=tailwind,nodejs,mongodb,linux"
              />
            </div>
          </SkillsCont>
        </Skills>
        <Terminal onClick={changeT}>
          <Title>
            <h2>About</h2>
          </Title>
          <Content>
            <span className="Ttext">
              {Arrow}
              {currentText}
            </span>
          </Content>
        </Terminal>
        <Socials>
          <h2>Socials</h2>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/bojorquez-godina-martin-esteban-908609270/">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/1488/PNG/96/5296-linkedin_102551.png"
              />
            </a>
            <a href="https://github.com/doohed">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/2406/PNG/96/github_git_icon_145985.png"
              />
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

        <Procont>
          <Projects />
        </Procont>
      </Container>
    </div>
  );
}

export default Home;
