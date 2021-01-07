import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.Input}>
      <div>
        <form>
          <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default input;
