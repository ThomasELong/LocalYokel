import React, { useRef } from "react";
import "./Login.css";
import Register from "./Register";

const Login = ({toggle}) => {
  const email = useRef();
  const password = useRef();


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
    e.preventDefault();

    existingUserCheck().then((exists) => {
      
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("ly_user", exists.id);
        toggle();
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      } else if (!exists) {
        window.alert("User account does not exist");
      }
    });
  };

  return (
    <main className="container--login">
      <form className="form--login" >
        <div onSubmit={handleLogin}>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <button type="submit">Sign in</button>
        </div>
        <fieldset>
        <Register toggle={toggle} />
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
