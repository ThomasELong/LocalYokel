import React, { useContext, useRef } from "react"
import { CustomerNotesContext } from "./CustomerNotesProvider"
import { Button } from "reactstrap"

export default ({toggle, businessObject}) => {
    const { addCustomerNote } = useContext(CustomerNotesContext)
    const noteText = useRef()

    const createNewCustomerNote = () => {
        const userId = parseInt(sessionStorage.getItem("ly_user"))

        const newCustomerNote = {
            noteText: noteText.current.value,
            timestamp: Date.now(),
            businessId: businessObject.id,
            userId: userId
        }
        addCustomerNote(newCustomerNote)
        .then(toggle)
        .then(noteText.current.value = "")
    }

    return (
        <form className="addBusinessForm">
            <fieldset>
                <div className="form-group">
                    <input
                        type="text"
                        id="noteText"
                        ref={noteText}
                        required
                        className="form-control"
                        placeholder="Add A Note"
                        />
                </div>
            </fieldset>
            
            <button 
                onClick={
                    evt => {
                        evt.preventDefault()
                        createNewCustomerNote()
                    }
                }
                className="Button">
                Submit
            </button>
        </form>
    )



}

