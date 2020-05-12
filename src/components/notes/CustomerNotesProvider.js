import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    This component only adds and removes favorites to the customer's list
*/

export const CustomerNotesContext = React.createContext()



/*
    This component establishes what data can be used.
*/

export const customerNotesProvider = (props) => {
    const [customerNotes, setCustomerNotes] = useState([])

    const getCustomerNotes = () => {
        return fetch("http://localhost:9001/customerNotes")
            .then(response => response.json())
            .then(setCustomerNotes)
    }

    const addCustomerNote = customerNote => {
        return fetch("http://localhost:9001/customerNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerNote)
        })
            .then(getCustomerNotes)
    }


   useEffect(() => {
       getCustomerNotes()
        }, [])



        // This exports these functions
   return (
        <CustomerNotesContext.Provider value={{
            customerNotes, 
            addCustomerNote, 
            setCustomerNotes, 
        }}>
            {props.children}
        </CustomerNotesContext.Provider>
   )    
}
