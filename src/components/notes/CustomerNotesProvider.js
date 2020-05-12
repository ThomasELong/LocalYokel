import React, { useState, useEffect } from "react"


export const CustomerNotesContext = React.createContext()


export const CustomerNotesProvider = (props) => {
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

    const removeCustomerNote = customerNote => {
        return fetch(`http://localhost:9001/customerNotes/${customerNote}`, {
            method: "DELETE"
        }) .then(getCustomerNotes)
    }



   useEffect(() => {
       getCustomerNotes()
        }, [])



        // This exports these functions
   return (
        <CustomerNotesContext.Provider value={{
            customerNotes, 
            addCustomerNote, 
            removeCustomerNote,
            setCustomerNotes 
        }}>
            {props.children}
        </CustomerNotesContext.Provider>
   )    
}
