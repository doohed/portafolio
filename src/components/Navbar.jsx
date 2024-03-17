import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 800px;
  justify-content: space-between;
`;

const Blur = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #00000060;
  height: 55px;
  width: 100%;
  justify-content: space-between;
  backdrop-filter: blur(10px);
`

const Title = styled.div`
  margin-left: 10px;
  margin-top: 20px;
`;


const Navbar = () => {
  return (
    <div className="navbar">
      <Blur></Blur>
      <Section>
      <Title>
        <span>Martin Bojorquez</span>
      </Title>

    </Section>
    </div>
  );
};

export default Navbar;
