import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
scroll-behavior: smooth;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
