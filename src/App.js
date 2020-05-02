import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import {Route } from "react-router-dom";
import './App.css';

import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";






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
