import React from 'react';
// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from "./components/index"
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <CssBaseline>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </CssBaseline>
    </Router>
  );
}

export default App;
