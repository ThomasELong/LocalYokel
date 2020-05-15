import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const BusinessTypeContext = React.createContext()

/*
    This component establishes what data can be used.
*/

export const BusinessTypeProvider = (props) => {
    const [businessTypes, setBusinessTypes] = useState([])

    const getAccounts = () => {
        return fetch("http://localhost:9001/businessTypes")
            .then(response => response.json())
            .then(setBusinessTypes)
    }

    /*
        Load all animals when the component is mounted. Ensure
        that an empty array is the second argument to avoid infinite loop.
    */
   useEffect(() => {
       getAccounts()
   }, [])
   

   return (
        <BusinessTypeContext.Provider value={{
            businessTypes, setBusinessTypes
        }}>
            {props.children}
        </BusinessTypeContext.Provider>
   )
}