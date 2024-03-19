import "./App.css";
import Projects from "./Projects";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

const Container = styled.div`
  scroll-behavior: smooth;
`;

const Image = styled.div`
  top: 0px;
  left: 0px;
  z-index: -1;
  position: absolute;
  height: 100vh;
  min-height: 818px;
  width: 100%;
  background-image: url(https://wallpapers.com/images/hd/aesthetic-rain-wkfiz5qfrxlbx4fl.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 810px) {
    bottom: 10px;
    min-height: 1160px;
  }


`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <Container>
      <Image />
      <Navbar />
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
