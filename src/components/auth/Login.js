import React, { useRef } from "react";
import { Button } from "reactstrap";
import "./Login.css";
import Register from "./Register";
import BusinessForm from "../businesses/BusinessForm";

const Login = ({ toggle }) => {
  const email = useRef();
  const password = useRef();

  const userId = parseInt(sessionStorage.getItem("ly_user"));


  const existingUserCheck = () => {
    return fetch(`http://localhost:9001/users?email=${email.current.value}`)
      .then((res) => res.json())
      .then((user) => {
        if (user.length) {
          return user[0];
        }
        return false;
      });
  };


  const handleLogin = (e) => {
    e.preventDefault()
    existingUserCheck().then((exists) => {
      if (exists && exists.password === password.current.value) {
        sessionStorage.setItem("ly_user", exists.id);
        sessionStorage.setItem("accountType", exists.accountTypeId);
        toggle();
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      } else if (!exists) {
        window.alert("User account does not exist");
      }
    });
  };

  return (
    <>
      <form className="form--login">
        <div className="welcomeHeader">Please sign in</div>
        <fieldset className="login">
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="form-control"
            required
            autoFocus
          />
        </fieldset>
        <fieldset className="login">
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            required
          />
        </fieldset>
        <button className="Button welcomeButton" onClick={handleLogin}>
          Login
        </button>
      <div>
        <Register toggle={toggle} />
      </div>
      </form>
    </>
  );
};

export default Login;
