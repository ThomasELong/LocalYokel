import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data

    This component only adds and removes favorites to the customer's list
*/

export const BusinessNotesContext = React.createContext()



/*
    This component establishes what data can be used.
*/

export const BusinessNotesProvider = (props) => {
    const [businessNotes, setBusinessNotes] = useState([])

    const getBusinessNotes = () => {
        return fetch("http://localhost:9001/businessNotes")
            .then(response => response.json())
            .then(setBusinessNotes)
    }

    const addBusinessNote = businessNote => {
        return fetch("http://localhost:9001/businessNotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(businessNote)
        })
            .then(getBusinessNotes)
    }

    const removeBusinessNote = businessNote => {
        return fetch(`http://localhost:9001/businessNote/${businessNote}`, {
            method: "DELETE"
        }) .then(getBusinessNotes)
    }



   useEffect(() => {
       getBusinessNotes()
        }, [])



        // This exports these functions
   return (
        <BusinessNotesContext.Provider value={{
            removeBusinessNote,
            businessNotes, 
            addBusinessNote, 
            setBusinessNotes, 
        }}>
            {props.children}
        </BusinessNotesContext.Provider>
   )    
}
