import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.Input}>
      <div>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required
        />
      </div>
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
};

export default input;
