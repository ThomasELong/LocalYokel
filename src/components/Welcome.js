import React, { useState } from "react"
import { Dashboard } from "./Dashboard"
import Auth from "./auth/Auth"
import { AccountProvider } from "./accounts/AccountProvider"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("ly_user") ? <Dashboard /> : <AccountProvider> <Auth toggle={toggle} /> </AccountProvider>
    )
}

