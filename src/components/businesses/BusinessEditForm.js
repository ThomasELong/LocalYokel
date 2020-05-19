import React, { useContext, useState } from "react"
import { BusinessContext } from "./BusinessProvider"
import { BusinessTypeContext } from "./BusinessTypeProvider"



export const BusinessEditForm = ({ toggleEdit, currentBusinessObject }) => {
    const { updateBusiness } = useContext(BusinessContext)
    const { businessTypes } = useContext(BusinessTypeContext)


    const [ updatedBusinessInfo, setBusinessInfo ] = useState(currentBusinessObject)

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
                id: currentBusinessObject.id,
                name: updatedBusinessInfo.name,
                phone: updatedBusinessInfo.phone,
                address: updatedBusinessInfo.address,
                hours: updatedBusinessInfo.hours,
                facebook: updatedBusinessInfo.facebook,
                website: updatedBusinessInfo.website,
                notes: updatedBusinessInfo.notes,
                businessTypes: updatedBusinessInfo.businessTypes,
                businessUserId: parseInt(sessionStorage.getItem("ly_user"))
            })
                .then(toggleEdit)
            }
        
    return (
        <form>
            <div className="editBusinessForm">
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Business Name"
                        defaultValue={currentBusinessObject.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="phone">Phone: </label>
                    <input type="text" name="phone" required className="form-control"
                        placeholder={currentBusinessObject.phone}
                        defaultValue={currentBusinessObject.phone}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" required autoFocus className="form-control"
                        defaultValue={currentBusinessObject.address}
                        placeholder="Address"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="hours">Hours: </label>
                    <input type="text" name="hours" required autoFocus className="form-control"
                        defaultValue={currentBusinessObject.hours}
                        placeholder="Hours"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="facebook">Facebook: </label>
                    <input type="text" name="facebook" required autoFocus className="form-control"
                        defaultValue={currentBusinessObject.facebook}
                        placeholder="Facebook"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="website">Website: </label>
                    <input type="text" name="website" required autoFocus className="form-control"
                        defaultValue={currentBusinessObject.website}
                        placeholder="Website"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="businessType">Business Type</label>
                <select
                  defaultValue={currentBusinessObject.businessTypeId}
                  name="businessType"
                  ref={businessTypes}
                  id="businessType"
                  className="form-control"
                >
                  {businessTypes.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.type}
                    </option>
                  ))}
                </select>
              </fieldset>

            <fieldset>
                <div className="terminalform-group">
                    <label htmlFor="notes">Note: </label>
                    <input type="text" name="notes" required autoFocus className="form-control"
                        defaultValue={currentBusinessObject.notes}
                        placeholder="Note"
                        onChange={handleControlledInputChange}
                    />
                </div>
            <button className="Button btn-primary terminalform-group"
                onClick={evt => {
                    evt.preventDefault()
                    editBusinessInfo()
                    window.location.reload()
                }}>
                Save Updates
            </button>
            </fieldset>
            </div>
            
            
        </form>
    )
            }