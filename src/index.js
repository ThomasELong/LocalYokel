import React from "react"
import ReactDOM from "react-dom"
import Welcome from "./components/auth/Auth"
import { AccountProvider } from "./components/accounts/AccountProvider"



ReactDOM.render(<AccountProvider><Welcome /></AccountProvider>, document.getElementById("root"))
