// Same as Kennel.js

import React, { useState } from "react"
import { MainPage } from "./main"
import Auth from "./auth/Auth"
import { AccountProvider } from "./accounts/AccountProvider"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        sessionStorage.getItem("ly_user") ? <MainPage /> : <AccountProvider><Auth toggle={toggle} /></AccountProvider>
    )
}

