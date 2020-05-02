import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Resume from "./components/Resume";


function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route path="/" component={Home} exact/>
      <Route path="/resume" component={Resume} />
    </Fragment>
  );
}

export default App;
