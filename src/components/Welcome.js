// Same as Kennel.js

import React, { useState } from "react"
import { MainPage } from "./Main"
import Auth from "./auth/Auth"

export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("ly_user") ? <MainPage /> : <Auth toggle={toggle} />
    )
}

