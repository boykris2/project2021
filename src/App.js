import React, { Component } from "react";
import classes from "./App.module.css";
import LeftPage from "./containers/Page/LeftPage";
import RightPage from "./containers/Page/RightPage";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div>
          <LeftPage />
        </div>
        <p></p>
        <div>
          <RightPage />
        </div>
      </div>
    );
  }
}

export default App;
