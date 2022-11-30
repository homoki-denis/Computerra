import * as React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Main from "./components/Main";
import Services from "./components/Services";
import Ad from "./components/Ad";

function App() {
  return (
    <>
      <ParticleBackground />

      <Container maxWidth="lg" id="container">
        <Box sx={{ bgcolor: "transparent", height: "100vh" }}>
          <Navbar />
          <Box className="main-container">
            <Main />
          </Box>
        </Box>
      </Container>
      <Box id="services-container">
        <Container maxWidth="lg" id="container">
          <Services />
        </Container>

        <Container maxWidth="lg" id="container">
          <Ad />
        </Container>
      </Box>
    </>
  );
}

export default App;
