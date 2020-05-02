import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import {Route } from "react-router-dom";
import './App.css';

// import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.8",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </Fragment>
  );
};





function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </Fragment>
  );
}

export default App;
