import React from "react"
import Login from "./Login"

export default ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Local Yokel</h1>
            <div className="authContainer">
                    <Login toggle={toggle}/>
            </div>
        </>
    )
}