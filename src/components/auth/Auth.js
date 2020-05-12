import React from "react"
import Login from "./Login"
import "./Login.css" 

export default ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Local Yokel</h1>
            <div className="authContainer">
            <div >
                    <Login toggle={toggle}/>
                    
            </div>
            </div>
        </>
    )
}