import React, { useState } from "react"
import { Main } from "./Main"
import Auth from "./auth/Auth"
import { AccountProvider } from "./accounts/AccountProvider"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("ly_user") ? <Main /> : <AccountProvider><Auth toggle={toggle} /></AccountProvider>
    )
}

