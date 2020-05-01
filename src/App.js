import React, { Fragment } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Home from "./components/index"


function App() {
  return (
    <Fragment>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </Fragment>
  );
}

export default App;
