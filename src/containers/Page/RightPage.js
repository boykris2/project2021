import React, { Component } from "react";
import Input from "../../components/Input/Input";
import classes from "./RightPage.module.css";
import Button from "../../components/Button/Button";

class RightPage extends Component {
  state = {
    user: { firstName: "", lastName: "", email: "", password: "" },
    submitted: false,
    errors: {},
  };

  onChangeHandler = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
    // const key = event.target.name;
    // const value = event.target.value;
    // this.setState({ [key]: value });
    // console.log(this.state.firstName);
  };

  formSubmitHandler = () => {
    const err = {};
    const { firstName, lastName, email, password } = this.state.user;
    if (!firstName) {
      err.firstName = "This field is Required";
    }

    if (!lastName) {
      err.lastName = "This field is Required";
    }
    if (!email) {
      err.email = "E-mail is Required";
    }
    if (password.length < 8) {
      err.password = "Password should be more than 8 characters";
    }

    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        this.setState({ submitted: true });
      }
    });
  };

  render() {
    const { submitted, errors } = this.state;
    return (
      <div className={classes.Right}>
        <Button btnType="Button1">
          <strong>Try it free 7 days </strong>then $20/mo. thereafter
        </Button>
        <p></p>

        {submitted ? (
          <div>
            <h2>Registered!!!</h2>
          </div>
        ) : (
          <div className={classes.RightInput}>
            <p></p>
            <form>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.onChangeHandler}
                error={errors.firstName}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.onChangeHandler}
                error={errors.lastName}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={this.onChangeHandler}
                error={errors.email}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
                error={errors.password}
              />

              <Button btnType="Button2" handleClick={this.formSubmitHandler}>
                <strong>CLAIM YOUR FREE TRIAL</strong>
              </Button>
            </form>
            <p></p>
            <h3>
              By clicking the button, you are agreeing to our{" "}
              <span
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <a href="/">Terms and Services</a>
              </span>
            </h3>
          </div>
        )}

        <p></p>
      </div>
    );
  }
}
export default RightPage;
