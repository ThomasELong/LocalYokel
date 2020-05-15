import React from "react"
import Login from "./Login"
import "./Login.css" 
import Logo from "../images/Local Yokel Logo.png"

export default ({toggle}) => {
    return (
        <>
            <img className="welcomeLogo" src={Logo} alt="Logo"/>
            <div className="authContainer">
            <div className="loginContainer" >
                    <Login toggle={toggle}/>
                    
            </div>
            </div>
        </>
    )
}