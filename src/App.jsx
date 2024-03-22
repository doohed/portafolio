import "./App.css";
import Projects from "./Projects";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Container = styled.div`
  scroll-behavior: smooth;
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
      <Navbar/>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

