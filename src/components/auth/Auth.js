import React from "react"
import Login from "./Login"
import Register from "./Register"

export default ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Local Yokel</h1>
            <div className="authContainer">
                    <Login toggle={toggle}/>
                    <Register className="button--register" toggle={toggle}/>
            </div>
        </>
    )
}