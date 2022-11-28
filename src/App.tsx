import * as React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <React.Fragment>
        <Container maxWidth="lg" id="container">
          <ParticleBackground>
            <Box sx={{ bgcolor: "lightblue", height: "100vh" }}>
              <Navbar title="navbar" children={any} />
            </Box>
          </ParticleBackground>
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
