import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Header from "./Header";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles ({
    particlesCanva: {
        position: "absolute",
        opacity:0.2,

    }
})

const Home = () => {
    const classes = useStyles()
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            particles: {
                line_linked:{
                    shadow: {
            					enable: true,
            					color: "tomato",
            					blur: 5
            				}
                },
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
                }
              },
              size:{
                  value:8,
                  random: true,
                  anim:{
                      enable: true,
                      speed: 8,
                      size_min: 0.1,
                      sync: true
                  }
              },
              opacity:{
                  value: 1,
                  random:true,
                  anim:{
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: true
                  }
              }

            },
          }}
        />
      </Fragment>
    );
}

export default Home
