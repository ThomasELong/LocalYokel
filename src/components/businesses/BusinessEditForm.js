import React, { useContext, useState } from "react"
import { BusinessContext } from "./BusinessProvider"


export const BusinessEditForm = ({ businessDetail, toggleEdit }) => {
    const { updateBusiness } = useContext(BusinessContext)

    // Separate state variable to track the animal as it is edited
    const [ updatedBusinessInfo, setBusinessInfo ] = useState(businessDetail)

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
                id: updatedBusinessInfo.id,
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
    

    return (
        <form className="editBusinessForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Phone: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Animal breed"
                        defaultValue={businessDetail.phone}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Address: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.address}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hours: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.hours}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Facebook: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.facebook}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Website: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.website}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Note: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={businessDetail.notes}
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