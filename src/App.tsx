import * as React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Main from "./components/Main";
import Test from "./components/Test";

function App() {
  return (
    <>
      <ParticleBackground />
      <React.Fragment>
        <Container maxWidth="lg" id="container">
          <Box sx={{ bgcolor: "transparent", height: "100vh" }}>
            <Navbar />
            <Box className="main-container">
              <Main />
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
