import "./App.css";
import Projects from "./Projects";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

const Container = styled.div`
  scroll-behavior: smooth;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
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
      <Image src="https://wallpapers.com/images/hd/aesthetic-rain-wkfiz5qfrxlbx4fl.jpg"/>
      <Navbar />
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
