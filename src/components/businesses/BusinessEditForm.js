import React, { useContext, useState } from "react"
import { BusinessContext } from "./BusinessProvider"


export const BusinessEditForm = ({ toggleEdit }) => {
    const { updateBusiness } = useContext(BusinessContext)

    // Separate state variable to track the animal as it is edited
    const [ updatedBusinessInfo, setBusinessInfo ] = useState()

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newBusinessInfo = Object.assign({}, updatedBusinessInfo)
        newBusinessInfo[event.target.name] = event.target.value
        setBusinessInfo(newBusinessInfo)
    }

    const editBusinessInfo = () => {

            updateBusiness({
                name: updatedBusinessInfo.name,
                phone: updatedBusinessInfo.phone,
                address: updatedBusinessInfo.address,
                hours: updatedBusinessInfo.hours,
                facebook: updatedBusinessInfo.facebook,
                website: updatedBusinessInfo.website,
                notes: updatedBusinessInfo.notes,
                businessUserId: parseInt(localStorage.getItem("ly_user"))
            })
                .then(toggleEdit)
        }
        debugger
    

    return (
        <form className="editBusinessForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phone">Phone: </label>
                    <input type="text" name="phone" required className="form-control"
                        placeholder="Phone"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" required autoFocus className="form-control"
                        placeholder="Address"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hours">Hours: </label>
                    <input type="text" name="hours" required autoFocus className="form-control"
                        placeholder="Hours"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook: </label>
                    <input type="text" name="facebook" required autoFocus className="form-control"
                        placeholder="Facebook"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="website">Website: </label>
                    <input type="text" name="website" required autoFocus className="form-control"
                        placeholder="Website"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Note: </label>
                    <input type="text" name="notes" required autoFocus className="form-control"
                        placeholder="Note"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editBusinessInfo()
                }}>
                Save Updates
            </button>
        </form>
    )
            }