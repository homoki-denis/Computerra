import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import video from "../assets/computerra.mp4";

export default function Main() {
  return (
    <Box className="main">
      <Grid container rowSpacing={8} columns={{ xs: 4, md: 12 }} spacing={8}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="main-title">Computerra</h1>
          <p className="main-p">
            The right answer to your problem! We run a sizable business in the
            IT sector. A project, do you have one? Do you need the best software
            or the best design? We can assist you with this. 
          </p>
        </Grid>
        <Grid item xs={6} className="video-container">
          <Box sx={{ color: "black" }} className="intro-video">
            <video
              className="video"
              width="100%"
              height="100%"
              loop
              muted
              autoPlay
            >
              <source src={`${video}`} type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
