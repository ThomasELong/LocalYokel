import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    This component only adds and removes favorites to the customer's list
*/

export const BusinessContext = React.createContext()



/*
    This component establishes what data can be used.
*/

export const BusinessProvider = (props) => {
    const [businesses, setBusinesses] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getBusinesses = () => {
        return fetch("http://localhost:9001/businessInfo")
            .then(response => response.json())
            .then(setBusinesses)
    }

    const addBusiness = business => {
        return fetch("http://localhost:9001/customerFavorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business)
        })
            .then(getBusinesses)
    }


    /*
        Load all animals when the component is mounted. Ensure
        that an empty array is the second argument to avoid infinite loop.
    */
   useEffect(() => {
       getBusinesses()
        }, [])



        // This exports these functions
   return (
        <BusinessContext.Provider value={{
            businesses, 
            addBusiness, 
            setSearchTerm, 
            searchTerm, 
            setBusinesses, 
        }}>
            {props.children}
        </BusinessContext.Provider>
   )    
}
