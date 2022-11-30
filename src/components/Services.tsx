import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import comp from "../assets/comp.gif";
import { FiSmartphone } from "react-icons/fi";
import { RxGear } from "react-icons/rx";
import { RiPencilRuler2Line } from "react-icons/ri";
import { RxLayers } from "react-icons/rx";
import { BsRecycle } from "react-icons/bs";
import { RiWechatLine } from "react-icons/ri";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h3 className="services-title">WELCOME</h3>
        <h2 className="services-subtitle">Get a Better Understanding</h2>
        <p className="services-p">
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
            columns={{ xs: 8, sm: 8, md: 12 }}
            className="services-grid"
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <FiSmartphone className="services-icon smartphone" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>Responsive</h5>
                  <p>
                    Your website works on any device: desktop, tablet or mobile.
                  </p>
                </Box>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <RxGear className="services-icon gears" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>Customizable</h5>
                  <p>
                    You can easily read, edit, and write your own code, or
                    change everything.
                  </p>
                </Box>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <RiPencilRuler2Line className="services-icon pencil" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>UI design</h5>
                  <p>
                    There is a bunch of useful and necessary elements for
                    developing your website.
                  </p>
                </Box>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <RxLayers className="services-icon layers" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>Good base</h5>
                  <p>
                    You can find our code well organized, commented and
                    readable.
                  </p>
                </Box>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <BsRecycle className="services-icon recycle" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>Clean Code</h5>
                  <p>
                    As you can see in the source code, we provided a clean code.
                  </p>
                </Box>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              className="services-container-flex"
            >
              <Item sx={{ display: "flex" }} className="services-item">
                <RiWechatLine className="services-icon chat" />
                <Box sx={{ textAlign: "left" }} className="services-header">
                  <h5>Support</h5>
                  <p>
                    When you purchase this template, you'll freely receive
                    future updates.
                  </p>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Services;
