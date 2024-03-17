import { useEffect, useRef, useState } from "react";
import "./Home.css";
import styled from "styled-components";

const Presentation = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;

  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: left;
  margin-top: 80px;
`;
const Skills = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  margin-top: 80px;
`;
const Terminal = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  height: 225px;
  cursor: pointer;
`;

const SkillsCont = styled.div``;
const Cont = styled.div`
  margin: 20px;
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

const Image = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url("https://ubuntucommunity.s3.us-east-2.amazonaws.com/original/2X/3/3f0d4b8955230d84c8a00e1e4f1051212bfe1781.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 300px 200px;
  grid-template-columns: 400px 400px;
  margin-top: -6%;
`;

const Socials = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
`;

const Projects = styled.div`
  background-color: #333333;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  grid-row-start: 2;
  grid-row-end: 5;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
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
      <Image />
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
        <Projects>
          <Cont>
            <h2>Projects</h2>
            <Head>
              <div>
                <h3>Ecom</h3>
              </div>
              <img className="projectP" src="/ecom.png" />
            </Head>
            <div className="cont">
              <span>
                Ecommerce front-end page for preview a simple product.
              </span>
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
                <h4>Live demo</h4><a href="https://ecom-eight-tan.vercel.app/">
              <img
                className="iconss"
                src="https://cdn.icon-icons.com/icons2/2406/PNG/96/github_git_icon_145985.png"
              />
              </a>
              </div>
            </Stats>
          </Cont>
        </Projects>
      </Container>
    </div>
  );
}

export default Home;
