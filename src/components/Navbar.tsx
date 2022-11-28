import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
  title?: string;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children!, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props: Props) {
  // States
  const [menu, setMenu] = useState(false);
  const [items, setItems] = useState("");

  // Functions
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "transparent" }}>
          <Toolbar id="navbar">
            <Container id="container">
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="navbar-container"
              >
                <Box>
                  <Typography variant="h6" className="logo">
                    COMPUTERRA
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", textTransform: "uppercase" }}
                  className="nav-items"
                >
                  <div className={`menu ${menu ? "menu-block" : "menu-flex"}`}>
                    <Typography className="nav-item" variant="h6">
                      <a href="">Home</a>
                    </Typography>
                    <Typography className="nav-item" variant="h6">
                      <a href="">About</a>
                    </Typography>
                    <Typography className="nav-item" variant="h6">
                      <a href="">Services</a>
                    </Typography>
                    <Typography className="nav-item" variant="h6">
                      <a href="">Contact</a>
                    </Typography>
                  </div>
                  <Box className="hamburger-menu" onClick={toggleMenu}>
                    <button
                      className={`hamburger hamburger--vortex ${
                        menu ? "is-active" : null
                      }   `}
                      type="button"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

{
  /* <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment> */
}
