import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const AccountContext = React.createContext()

/*
    This component establishes what data can be used.
*/

export const AccountProvider = (props) => {
    const [accounts, setAccounts] = useState([])

    const getAccounts = () => {
        return fetch("http://localhost:9001/accountTypes")
            .then(response => response.json())
            .then(setAccounts)
    }

    /*
        Load all animals when the component is mounted. Ensure
        that an empty array is the second argument to avoid infinite loop.
    */
   useEffect(() => {
       getAccounts()
   }, [])
   

   return (
        <AccountContext.Provider value={{
            accounts, setAccounts
        }}>
            {props.children}
        </AccountContext.Provider>
   )
}