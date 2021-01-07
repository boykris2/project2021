import React, { Component } from "react";
import Input from "../../components/Input/Input";
import classes from "./RightPage.module.css";
import Button from "../../components/Button/Button";

class RightPage extends Component {
  state = { firstName: "", lastName: "", email: "", password: "" };

  onChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
    console.log(this.state.firstName);
  };
  render() {
    return (
      <div className={classes.Right}>
        <Button btnType="Button1">
          <strong>Try it free 7 days </strong>then $20/mo. thereafter
        </Button>
        <p></p>
        <div className={classes.RightInput}>
          <p></p>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.onChangeHandler}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.onChangeHandler}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.onChangeHandler}
          />
          <Input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.onChangeHandler}
          />

          <Button btnType="Button2">
            <strong>CLAIM YOUR FREE TRIAL</strong>
          </Button>
          <p></p>
          <h3>
            By clicking the button, you are agreeing to our{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              Terms and Services
            </span>
          </h3>
        </div>
        <p></p>
      </div>
    );
  }
}
export default RightPage;
