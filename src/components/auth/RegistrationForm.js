import React, { useRef, useContext, useState } from "react";
import "./Login.css";
import { AccountContext } from "../accounts/AccountProvider";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const { accounts } = useContext(AccountContext);

  const existingUserCheck = () => {
    return fetch(`http://localhost:9001/customers?email=${email.current.value}`)
      .then((_) => _.json())
      .then((customer) => {
        if (customer.length) {
          return true;
        }
        return false;
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        if (accounts.current.value === "Customer") {
          fetch("http://localhost:9001/customers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.current.value,
              password: password.current.value,
              name: `${firstName.current.value} ${lastName.current.value}`,
              accountType: accounts.current.value,
            }),
          })
            .then((_) => _.json())
            .then((createdUser) => {
              if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem("ly_customer", createdUser.id);
              }
            });
        } else {
          if (accounts.current.value === "Business")
            fetch("http://localhost:9001/businesses", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email.current.value,
                password: password.current.value,
                name: `${firstName.current.value} ${lastName.current.value}`,
                accountType: accounts.current.value,
              }),
            })
              .then((_) => _.json())
              .then((createdUser) => {
                if (createdUser.hasOwnProperty("id")) {
                  localStorage.setItem("ly_business", createdUser.id);
                }
              });
        }
      });
    } else {
      window.alert("Passwords do not match");
    }
  };
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <main className="container--login">
      <form className="form--register" onSubmit={handleRegister}>
        <h4 className="darkgray">
          If you are not a user yet, please register a new account
        </h4>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name </label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>
        <fieldset>
        <Button variant="primary" onClick={handleShow}>
        Register
        </Button>
          <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
              Register
            </ModalHeader>

            <ModalBody>






                
            <label htmlFor="accountType">Account Type</label>
          <select
            defaultValue=""
            name="accountType"
            ref={accounts}
            id="accountType"
            className="form-control"
          >
            {accounts.map((e) => (
              <option key={e.id} value={e.accountTypeId}>
                {e.type}
              </option>
            ))}
          </select>
            </ModalBody>

            <ModalFooter>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </ModalFooter>
          </Modal>
         
        </fieldset>
        <fieldset>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </main>
  );
};

export default Register;
