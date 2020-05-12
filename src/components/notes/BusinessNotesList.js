import React, { useContext, useState } from "react"
import { BusinessNotesContext } from "./BusinessNotesProvider"
import BusinessNotes from "./BusinessNote"




export default () => {
    const { businessNotes } = useContext(BusinessNotesContext)
    
    return (
        <>
        <div className="businessNoteHeader">
            <h2 className="businessNoteTitle">Mentionables</h2>
            <div>
                {
                    businessNotes.map(businessNote => <BusinessNotes  key={businessNote.id} businessNotes={businessNote} />
                    )
                }
            </div>
            
        </div>
        </>
    )
}
