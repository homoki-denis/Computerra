import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import comp from "../assets/comp.gif";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsGear } from "react-icons/bs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Services() {
  return (
    <div className="services">
      <div>
        <h3>WELCOME</h3>
        <h2>Improve Your Understanding</h2>
        <p>
          Implement process improvements globally rather than internally
          dynamically.
        </p>
      </div>
      <div className="services-img">
        <img src={comp} alt="" />
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Item sx={{ display: "flex" }}>
                <FcSmartphoneTablet className="services-icon" />
                <Box sx={{ textAlign: "left" }}>
                  <h5>Responsive</h5>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Services;
