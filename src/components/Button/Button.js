import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <div className={classes[props.btnType]}>
      <button>{props.children}</button>
    </div>
  );
};

export default button;
