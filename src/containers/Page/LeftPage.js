import React from "react";
import classes from "./LeftPage.module.css";

const leftPage = (props) => {
  return (
    <div className={classes.Left}>
      <h1>Learn to code by watching others</h1>
      <h4>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable
      </h4>
    </div>
  );
};

export default leftPage;
