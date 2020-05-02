import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Route } from "react-router-dom";
import './App.css';

import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";







function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </Fragment>
  );
}

export default App;
